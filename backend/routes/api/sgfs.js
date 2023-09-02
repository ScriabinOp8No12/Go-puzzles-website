const moment = require("moment");
const express = require("express");
const smartgame = require("smartgame");
const { python } = require("pythonia");
const path = require("path");
const jssgf = require("jssgf");
const { requireAuth } = require("../../utils/auth");
const { User, Puzzle, Sgf } = require("../../db/models");
// doesn't work for somereason, javascript can't find cloudinary.js
// const cloudinary = require("../../../cloudinary.js");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

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
      return res
        .status(400)
        .json({
          error:
            "Board size (SZ property) is missing in SGF data. Analysis and thumbnail generation cannot proceed.",
        });
    }

    const board_size = gameTree.SZ;

    // Update board_size in the Sgf table
    await Sgf.update({ board_size: board_size }, { where: { id: sgf.id } });

    // Remove newline characters and extra spaces from sgf_data
    // const sanitizedSgfData = sgf.sgf_data.replace(/\s+/g, " ").trim();

    formattedSGFs.SGFs.push({
      id: sgf.id,
      user_id: sgf.user_id,
      sgf_name: sgf.sgf_name,
      sgf_data: sgf.sgf_data,
      // sgf_data: sanitizedSgfData,
      black_player: sgf.black_player,
      white_player: sgf.white_player,
      black_rank: sgf.black_rank,
      white_rank: sgf.white_rank,
      result: sgf.result,
      thumbnail: sgf.thumbnail,
      board_size: Number(board_size),
      createdAt: moment(sgf.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment(sgf.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
    });
  }

  return res.json(formattedSGFs);
});

// Upload new SGFs (only 1 at a time for now) to the current user's SGF table
router.post("/current", requireAuth, async (req, res) => {

  const { sgf_data } = req.body;

  // Function to validate SGF data using regex
  const isValidSgf = (sgf) => {
    if (!sgf.startsWith("(;")) {
      return false;
    }

    if (!/SZ\[9\]|SZ\[13\]|SZ\[19\]/.test(sgf)) {
      return false;
    }

    if (!/AB\[[a-z]{2}\]|AW\[[a-z]{2}\]|;B\[[a-z]{2}\]|;W\[[a-z]{2}\]/.test(sgf)) {
      return false;
    }

    return true;
  };
  // If sgf data (uploaded within an array) is more than one, it's invalid
  try {
    if (sgf_data.length > 1) {
      return res.status(400).json({
        message: "Bad Request",
        errors: { sgf_data: ["Can only upload 1 SGF at once!"] },
      });
    }
    // Import our python script (sgf 2 thumbnail image) using JSPybridge
    const sgf2img = await python(
      path.join(__dirname, "..", "..", "..", "thumbnail_python_scripts", "sgf2img.py")
    );

    const data = sgf_data[0];
    const parsedSgf = jssgf.parse(data);
    const gameInfo = parsedSgf[0];
    const board_size = gameInfo.SZ;

    if (!isValidSgf(data)) {
      return res.status(400).json({ error: "Invalid SGF data" });
    }

    // Get our base64 encoded string using our python script
    const thumbnailBase64 = await sgf2img.generatePreview(data);

    // Upload our thumbnail to cloudinary then generate the url
    const uploadResponse = await cloudinary.uploader.upload(`data:image/png;base64,${thumbnailBase64}`);
    const thumbnailUrl = uploadResponse.url;
    // Convert from http to https before storing url in database
    const httpsThumbnailUrl = thumbnailUrl.replace('http://', 'https://');

    const sgfRecord = await Sgf.create({
      user_id: req.user.id,
      sgf_data: data,
      sgf_name: `${gameInfo.PB || "?"} vs ${gameInfo.PW || "?"}`,
      board_size: board_size,
      black_player: gameInfo.PB || "?",
      white_player: gameInfo.PW || "?",
      black_rank: gameInfo.BR || "?",
      white_rank: gameInfo.WR || "?",
      result: gameInfo.RE || "?",
      thumbnail: httpsThumbnailUrl,
    });

    return res.status(201).json({ ...sgfRecord.toJSON() });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An error occurred while uploading the SGFs, please verify you are uploading a valid SGF!",
    });
  }
});


// Edit the SGF name, player names, or player ranks

router.put("/:sgf_id/current", requireAuth, async (req, res) => {
  try {
    // Validation checks
    const {
      sgf_name,
      black_player,
      white_player,
      black_rank,
      white_rank,
      result,
    } = req.body;

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
        errors,
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
      updatedAt: moment(sgfRecord.updatedAt).format("YYYY-MM-DD HH:mm:ss"), // formatted with moment.js
    });
  } catch (err) {
    console.error(err);

    // Handle potential Sequelize validation errors
    if (err.name && err.name === "SequelizeValidationError") {
      let errors = {};

      err.errors.forEach((error) => {
        if (!errors[error.path]) {
          errors[error.path] = [];
        }
        errors[error.path].push(error.message);
      });

      return res.status(400).json({
        message: "Validation error",
        errors,
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
