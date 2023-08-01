const express = require("express");
const smartgame = require("smartgame");
const { python } = require("pythonia");
const path = require("path");
const jssgf = require("jssgf");
const { requireAuth } = require("../../utils/auth");
const { User, Puzzle, Sgf } = require("../../db/models");

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
      "createdAt",
      "updatedAt",
      "sgf_name",
      "sgf_data",
      "black_player",
      "white_player",
      "black_rank",
      "white_rank",
      "result",
      "thumbnail",
    ],
  });
  // use count aggregate function to get the total number of SGFs
  const numberOfSGFs = await Sgf.count({ where: { user_id: req.user.id } });

  // Format the response body
  const formattedSGFs = {
    SGFs: sgfs.map((sgf) => ({
      id: sgf.id,
      user_id: sgf.user_id,
      createdAt: sgf.createdAt,
      updatedAt: sgf.updatedAt,
      sgf_name: sgf.sgf_name,
      sgf_data: sgf.sgf_data,
      black_player: sgf.black_player,
      white_player: sgf.white_player,
      black_rank: sgf.black_rank,
      white_rank: sgf.white_rank,
      result: sgf.result,
      // added thumbnail here
      thumbnail: sgf.thumbnail,
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
  // moved array check before length check, otherwise the length won't be checking the array length,
  // it'll be checking the length of the string passed in, which means 10 characters will trigger the error!
  try {
    // Validate the sgf_data in the req.body
    if (!Array.isArray(sgf_data)) {
      return res.status(400).json({ error: "SGF data needs to be an array!" });
    }
    // Check if the sgf_data array contains more than 10 SGFs
    if (sgf_data.length > 10) {
      return res.status(400).json({
        message: "Bad Request",
        errors: {
          sgf_data: ["Can only upload up to 10 SGFs at once!"],
        },
      });
    }
    // Import the sgf2img module using JSPyBridge
    const sgf2img = await python(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "thumbnail_python_scripts",
        "sgf2img.py"
      )
    );

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
      // sgf[0] contains the game info, which we can then access the SGF properties using dot notation
      // sgf[1] doesn't exist
      const gameInfo = sgf[0];
      const blackPlayer = gameInfo.PB || "?";
      const whitePlayer = gameInfo.PW || "?";
      const blackRank = gameInfo.BR || "?";
      const whiteRank = gameInfo.WR || "?";
      const result = gameInfo.RE || "?";

      // Generate the SGF name
      const sgfName = `${blackPlayer} vs ${whitePlayer}`;

      // Generate the preview image using the sgf2img module we imported
      const thumbnail = await sgf2img.generatePreview(data);

      // Create a new Sgf record in the database
      const sgfRecord = await Sgf.create({
        // return the sgfdata back so user can click on it to view the sgf
        // need it to execute the wgo.js code that opens the sgf player with the sgf rendered in the browser
        user_id: req.user.id,
        sgf_name: sgfName,
        black_player: blackPlayer,
        white_player: whitePlayer,
        black_rank: blackRank,
        white_rank: whiteRank,
        result: result,
        sgf_data: data,
        // remember that the left side is the COLUMN name, so it must exactly match the column name in the database or it won't work...
        thumbnail: thumbnail,
      });

      // Add the new Sgf record to the response array
      response.push(sgfRecord);
    }
    // Send a success response
    return res.status(201).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error:
        "An error occurred while uploading the SGFs, please verify you are uploading a valid SGF!",
    });
  }
});

// Get AI recommended mistakes from KataGo



module.exports = router;
