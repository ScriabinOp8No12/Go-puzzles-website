const express = require("express");
const smartgame = require("smartgame");
// const sgf2img = require("../../sgf2img.py");
const jssgf = require("jssgf");
const { requireAuth } = require("../../utils/auth");
const { User, Puzzle, Sgf } = require("../../db/models");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");

const router = express.Router();
// Get all SGFs of the current user (format like go4go.net)
router.get("/current", requireAuth, async (req, res) => {
  // when making a request to "get current user" on postman, and result is { "user": null}
  // we get a 401 unauthorized error "Authentication required"

  // Find all SGFs owned by the current logged in user
  // Retrieve the SGFs for the specified user
  const sgfs = await Sgf.findAll({
    // compare SGF table's user_id value (owner of the SGFs)
    // and the logged in user (req.user.id)
    where: { user_id: req.user.id },
    attributes: [
      "id",
      "user_id",
      "game_preview",
      "createdAt",
      "updatedAt",
      "sgf_name",
      "sgf_data",
      "black_player",
      "white_player",
      "black_rank",
      "white_rank",
      "result",
    ],
  });
  // use count aggregate function to get the total number of SGFs
  const numberOfSGFs = await Sgf.count({ where: { user_id: req.user.id } });

  // Format the response body
  const formattedSGFs = {
    SGFs: sgfs.map((sgf) => ({
      id: sgf.id,
      user_id: sgf.user_id,
      game_preview: sgf.game_preview,
      createdAt: sgf.createdAt,
      updatedAt: sgf.updatedAt,
      sgf_name: sgf.sgf_name,
      sgf_data: sgf.sgf_data,
      black_player: sgf.black_player,
      white_player: sgf.white_player,
      black_rank: sgf.black_rank,
      white_rank: sgf.white_rank,
      result: sgf.result,
    })),
    // put count of SGFs outside of sgf array
    numberOfSGFs,
  };

  return res.json(formattedSGFs);
});

// Upload new SGFs (up to 10 at a time) to the current user's SGF table
router.post("/current", requireAuth, async (req, res) => {
  // should throw a 401 authentication error if no user logged in

  // Grab the data from the req.body
  const { sgf_data } = req.body;

  // Check if the sgf_data array contains more than 10 elements
  if (sgf_data.length > 10) {
    return res.status(400).json({
      message: "Bad Request",
      errors: {
        sgf_data: ["Can only upload up to 10 SGFs at once!"],
      },
    });
  }
  try {
    // Validate the sgf_data in the req.body
    if (!Array.isArray(sgf_data)) {
      return res.status(400).json({ error: "SGF data needs to be an array!" });
    }

    // Process each SGF in the array
    const response = [];
    for (const data of sgf_data) {
      try {
        // Parse the SGF data using smartgame
        const collection = smartgame.parse(data);

        // Check if the collection object is valid
        if (
          !collection ||
          !collection.gameTrees ||
          collection.gameTrees.length === 0
        ) {
          return res.status(400).json({ error: "Invalid SGF data" });
        }
      } catch (error) {
        return res.status(400).json({ error: "Invalid SGF data" });
      }

      // Parse the SGF data using jssgf
      const sgf = jssgf.parse(data);
      console.log("sgf: ", sgf);
      const gameInfo = sgf[0];
      console.log("gameInfo: ", gameInfo);
      const blackPlayer = gameInfo.PB;
      console.log("blackPlayer: ", blackPlayer);
      const whitePlayer = gameInfo.PW;
      const blackRank = gameInfo.BR;
      const whiteRank = gameInfo.WR;
      const result = gameInfo.RE;

      // Generate the SGF name
      const sgfName = `${blackPlayer} vs ${whitePlayer}`;

      // Generate the preview image (how do we use the python script we wrote to do this in this javascript file?)
      // const previewImage = await sgf2img.generatePreview(data);

      // Create a new Sgf record in the database
      const sgfRecord = await Sgf.create({
        // return the sgfdata back so user can click on it to view the sgf
        // need it to execute the wgo.js code that opens the sgf player with the sgf rendered in the browser
        sgf_data: data,
        // execute python script when data enters database, different syntax for postgres and sqlite3
        // maybe a simple confirmation in the response body here is good enough
        // game_preview: previewImage,
        user_id: req.user.id,
        sgf_name: sgfName,
        black_player: blackPlayer,
        white_player: whitePlayer,
        black_rank: blackRank,
        white_rank: whiteRank,
        result: result,
      });

      // Add the new Sgf record to the response array
      response.push(sgfRecord);
    }

    // Send a success response
    return res.status(201).json(response);
    // return res.status(201).json(sgfRecord);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while uploading the SGFs" });
  }
});

module.exports = router;
