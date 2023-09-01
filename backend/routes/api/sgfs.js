const moment = require('moment');
const express = require("express");
const smartgame = require("smartgame");
const { python } = require("pythonia");
const path = require("path");
const jssgf = require("jssgf");
const { requireAuth } = require("../../utils/auth");
const { User, Puzzle, Sgf } = require("../../db/models");

const router = express.Router();

// Get all SGFs of the current user
router.get("/current", requireAuth, async (req, res) => {
  const sgfs = await Sgf.findAll({
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

  const numberOfSGFs = await Sgf.count({ where: { user_id: req.user.id } });

  const formattedSGFs = {
    SGFs: [],
    numberOfSGFs,
  };

  for (const sgf of sgfs) {
    // Parse SGF data to get the game tree
    const gameTree = jssgf.parse(sgf.sgf_data)[0];

    // Check if board size exists
    if (!gameTree.SZ) {
      return res.status(400).json({ error: 'Board size (SZ property) is missing in SGF data. Analysis and thumbnail generation cannot proceed.' });
    }

    const board_size = gameTree.SZ;

    formattedSGFs.SGFs.push({
      id: sgf.id,
      user_id: sgf.user_id,
      sgf_name: sgf.sgf_name,
      sgf_data: sgf.sgf_data,
      black_player: sgf.black_player,
      white_player: sgf.white_player,
      black_rank: sgf.black_rank,
      white_rank: sgf.white_rank,
      result: sgf.result,
      thumbnail: sgf.thumbnail,
      board_size: Number(board_size),
      createdAt: moment(sgf.createdAt).format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment(sgf.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
    });
  }

  return res.json(formattedSGFs);
});

// Upload new SGFs (up to 10 at a time) to the current user's SGF table
router.post("/current", requireAuth, async (req, res) => {
  // should throw a 401 authentication error if no user logged in

  // Grab the data from the req.body
  const { sgf_data } = req.body;

  try {
    // Check if the sgf_data array contains more than 10 SGFs
    if (sgf_data.length > 1) {
      return res.status(400).json({
        message: "Bad Request",
        errors: {
          sgf_data: ["Can only upload up to 1 SGF at once!"],
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
      response.push({
        ...sgfRecord.toJSON(),
        // use a placeholder instead of the giant blob of sgf_data/thumbnail in the response for now
        sgf_data: "sgf_data placeholder",
        thumbnail: "thumbnail placeholder"
      });
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

// Edit the SGF name, player names, or player ranks

router.put("/:sgf_id/current", requireAuth, async (req, res) => {
  try {
    // Validation checks
    const { sgf_name, black_player, white_player, black_rank, white_rank, result } = req.body;

    let errors = {};

    if (!sgf_name || sgf_name.trim() === "") {
      errors.sgf_name = ["SGF name is required"];
    } else if (sgf_name.length > 100) {
      errors.sgf_name = ["Maximum SGF name length is 100 characters."];
    }

    if (result && result.trim() !== "" && result.length > 30) {
      errors.result = ["Maximum result length is 30 characters."];
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        message: "Bad Request",
        errors
      });
    }

    // Check authorization
    const sgfRecord = await Sgf.findOne({ where: { id: req.params.sgf_id } });
    if (!sgfRecord) {
      return res.status(404).json({ error: "SGF not found!" });
    }
    if (sgfRecord.user_id !== req.user.id) {
      return res.status(403).json({ error: "Not authorized!" });
    }

    // Update SGF data
    sgfRecord.sgf_name = sgf_name;
    sgfRecord.black_player = black_player || sgfRecord.black_player;
    sgfRecord.white_player = white_player || sgfRecord.white_player;
    sgfRecord.black_rank = black_rank || sgfRecord.black_rank;
    sgfRecord.white_rank = white_rank || sgfRecord.white_rank;
    sgfRecord.result = result || sgfRecord.result;

    await sgfRecord.save();

    // Send the updated record in response
    res.status(200).json({
      sgf_id: sgfRecord.id.toString(),
      sgf_name: sgfRecord.sgf_name,
      black_player: sgfRecord.black_player,
      white_player: sgfRecord.white_player,
      black_rank: sgfRecord.black_rank,
      white_rank: sgfRecord.white_rank,
      result: sgfRecord.result,
      updatedAt: moment(sgfRecord.updatedAt).format('YYYY-MM-DD HH:mm:ss'), // formatted with moment.js
    });
  } catch (err) {
    console.error(err);

    // Handle potential Sequelize validation errors
    if (err.name && err.name === 'SequelizeValidationError') {
        let errors = {};

        err.errors.forEach(error => {
            if (!errors[error.path]) {
                errors[error.path] = [];
            }
            errors[error.path].push(error.message);
        });

        return res.status(400).json({
            message: "Validation error",
            errors
        });
    }

    res.status(500).json({ error: "Internal Server Error!" });
}

});

// Delete an SGF (do NOT delete the puzzles with it)

router.delete("/:sgf_id/current", requireAuth, async (req, res) => {
  try {
    // Find the SGF record based on the provided sgf_id
    const sgfRecord = await Sgf.findOne({ where: { id: req.params.sgf_id } });

    // If the SGF doesn't exist, return a 404 error
    if (!sgfRecord) {
      return res.status(404).json({ message: "SGF couldn't be found" });
    }

    // Check for authorization
    if (sgfRecord.user_id !== req.user.id) {
      return res.status(403).json({ message: "Not authorized!" });
    }

    // Delete the SGF record
    await sgfRecord.destroy();

    // Return a success response
    res.status(200).json({ message: "Successfully deleted SGF" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});


module.exports = router;
