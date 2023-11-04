const moment = require("moment");
const express = require("express");
const smartgame = require("smartgame");
const { python } = require("pythonia");
const path = require("path");
const jssgf = require("jssgf");
const { requireAuth } = require("../../utils/auth");
const { User, Sgf, Puzzle, PotentialPuzzle } = require("../../db/models");

// Bull for queueing / asynchronous katago analysis engine endpoint
// const Bull = require("bull")
// const cmd = require('node-cmd')
// const fs = require('fs')
// Initializes new Bull queue named "katago"
// const katagoQueue = new Bull('katago');

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
router.get("/", requireAuth, async (req, res) => {
  const sgfs = await Sgf.findAll({
    // Only show the user the sgf if the suspended column is set to false,
    // this allows us to soft delete the SGF, instead of causing issues where the associated puzzles / other tables get null validation errors
    where: { user_id: req.user.id, suspended: false },
    attributes: [
      "id",
      "user_id",
      "game_date",
      "board_size",
      "createdAt",
      "updatedAt",
      "sgf_name",
      "sgf_data",
      "black_player",
      "white_player",
      "black_rank",
      "white_rank",
      "komi",
      "result",
      "thumbnail",
    ],
  });

  const numberOfSGFs = await Sgf.count({
    where: { user_id: req.user.id, suspended: false },
  });

  const formattedSGFs = {
    SGFs: sgfs.map((sgf) => ({
      ...sgf.get(),
      board_size: Number(sgf.board_size), // converting to Number type
      game_date: moment(sgf.game_date).format("YYYY-MM-DD HH:mm:ss"),
      createdAt: moment(sgf.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment(sgf.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
    })),
    numberOfSGFs,
  };

  return res.json(formattedSGFs);
});

// Upload new SGFs (only 1 at a time for now) to the current user's SGF table
router.post("/", requireAuth, async (req, res) => {
  const { sgf_data } = req.body;
  const validationErrors = [];

  // Function to validate SGF data using regex
  const isValidSgf = (sgf) => {
    if (
      !/AB\[[a-z]{2}\]|AW\[[a-z]{2}\]|;B\[[a-z]{2}\]|;W\[[a-z]{2}\]/.test(sgf)
    ) {
      // This message below never shows up in our errors
      return "Invalid";
    }

    return null; // Return null if no errors
  };

  try {
    if (sgf_data.length > 1) {
      validationErrors.push("Can only upload 1 SGF at a time.");
    }

    // Import our python script (sgf 2 thumbnail image) using JSPybridge
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

    const data = sgf_data[0];
    const parsedSgf = jssgf.parse(data);
    const gameInfo = parsedSgf[0];
    const board_size = gameInfo.SZ || 19;
    const game_date = gameInfo.DT;
    const komi = gameInfo.KM;

    if (isValidSgf(data)) {
      validationErrors.push(
        "Invalid SGF data, no move order and/or stones found."
      );
    }

    if (komi && isNaN(parseFloat(komi))) {
      validationErrors.push("Invalid komi value.");
    }

    if (![9, 13, 19].includes(parseInt(board_size))) {
      validationErrors.push("Board size must be 9, 13, or 19.");
    }

    if (validationErrors.length > 0) {
      // console.log("Validation errors:", validationErrors); // Debugging line
      return res.status(400).json({ errors: validationErrors });
    }

    // Get our base64 encoded string using our python script
    const thumbnailBase64 = await sgf2img.generatePreview(data);

    // Upload our thumbnail to cloudinary then generate the url
    const uploadResponse = await cloudinary.uploader.upload(
      `data:image/png;base64,${thumbnailBase64}`
    );
    const thumbnailUrl = uploadResponse.url;
    // Convert from http to https before storing url in database
    const httpsThumbnailUrl = thumbnailUrl.replace("http://", "https://");

    const sgfRecord = await Sgf.create({
      user_id: req.user.id,
      sgf_data: data,
      game_date: game_date || null,
      sgf_name: `${gameInfo.PB || "?"} vs ${gameInfo.PW || "?"}`,
      board_size: board_size,
      black_player: gameInfo.PB || "?",
      white_player: gameInfo.PW || "?",
      black_rank: gameInfo.BR || "?",
      white_rank: gameInfo.WR || "?",
      komi: parseFloat(komi) || 0.5,
      result: gameInfo.RE || "?",
      thumbnail: httpsThumbnailUrl,
    });

    return res.status(201).json({
      ...sgfRecord.toJSON(),
      game_date: moment(sgfRecord.game_date).format("YYYY-MM-DD HH:mm:ss"),
      createdAt: moment(sgfRecord.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment(sgfRecord.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
    });
  } catch (err) {
    // console.error("Caught server-side error:", err); // Debugging line
    if (err.name === "SequelizeValidationError") {
      const validationErrors = err.errors.map((error) => error.message);
      res.status(400).json({ errors: validationErrors });
    } else {
      console.error(err);
      res.status(500).json({
        error: "Invalid SGF!",
      });
    }
  }
});

// Get a single SGF by specified ID, render with wgo.js (we will render the sgf puzzle with glift library instead -> separate endpoint)
router.get("/:sgf_id", requireAuth, async (req, res) => {
  const sgfId = req.params.sgf_id;

  // First, check if the SGF exists at all
  const sgfExists = await Sgf.findOne({
    where: { id: sgfId },
  });

  if (!sgfExists) {
    return res.status(404).json({ error: "SGF not found" });
  }

  // Then, check if the SGF belongs to the current user
  const sgf = await Sgf.findOne({
    where: { id: sgfId, user_id: req.user.id },
    attributes: [
      "id",
      "createdAt",
      "updatedAt",
      "sgf_name",
      "sgf_data",
      "black_player",
      "white_player",
      "black_rank",
      "white_rank",
      "komi",
      "result",
      "board_size",
      "game_date",
    ],
  });

  if (!sgf) {
    return res.status(403).json({ error: "Forbidden" });
  }

  // Format the SGF data for the response
  const formattedSGF = {
    sgf_id: sgf.id,
    game_date: moment(sgf.game_date).format("YYYY-MM-DD HH:mm:ss"),
    sgf_name: sgf.sgf_name,
    sgf_data: sgf.sgf_data,
    board_size: sgf.board_size,
    black_player: sgf.black_player,
    white_player: sgf.white_player,
    black_rank: sgf.black_rank,
    white_rank: sgf.white_rank,
    komi: sgf.komi,
    result: sgf.result,
    createdAt: moment(sgf.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: moment(sgf.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
  };

  return res.status(200).json(formattedSGF);
});

// Edit: sgf_data (permanently for wgo.js rendering SGF), sgf_name, black_player, white_player, black_rank, white_rank, game_date, komi, result
router.put("/:sgf_id", requireAuth, async (req, res) => {
  try {
    // Check authorization and find the record
    const sgfRecord = await Sgf.findOne({ where: { id: req.params.sgf_id } });
    if (!sgfRecord) {
      return res.status(404).json({ error: "SGF not found!" });
    }
    if (sgfRecord.user_id !== req.user.id) {
      return res.status(403).json({ error: "Not authorized!" });
    }

    // Initialize errors object
    let errors = {};

    // Custom validation logic
    const {
      sgf_name,
      black_player,
      white_player,
      black_rank,
      white_rank,
      game_date,
      komi,
      result,
    } = req.body;

    // Validate sgf name length
    if (sgf_name.length > 65) {
      errors.sgf_name = ["Maximum sgf name length is 65 characters."];
    }
    // Validate black_player
    if (black_player.length > 30) {
      errors.black_player = ["Maximum black player length is 30 characters."];
    }
    // Validate white_player
    if (white_player.length > 30) {
      errors.white_player = ["Maximum white player length is 30 characters."];
    }
    // Validate black_rank
    if (black_rank.length > 20) {
      errors.black_rank = ["Maximum black rank length is 20 characters."];
    }
    // Validate white_rank
    if (white_rank.length > 20) {
      errors.white_rank = ["Maximum white rank length is 20 characters."];
    }
    // Validate game date
    if (!moment(game_date, "YYYY-MM-DD", true).isValid()) {
      errors.game_date = [
        "Game date can't be empty, or it's in the wrong format",
      ];
    }
    // Validate komi
    if (komi && isNaN(parseFloat(komi))) {
      errors.komi = ["Invalid komi."];
    }
    // Validate result length
    if (result.length > 20) {
      errors.result = ["Maximum result length is 20 characters."];
    }

    // Update SGF data *** these are the only fields the user can edit for now, it won't line up with the WGO.js rendered Go board fields necessarily
    // If the user leaves the field blank, or leaves a series of empty spaces, it will set the value to ? in the backend
    sgfRecord.game_date = game_date;
    sgfRecord.sgf_name = sgf_name.trim() !== "" ? sgf_name.trim() : "?";
    sgfRecord.black_player =
      black_player.trim() !== "" ? black_player.trim() : "?";
    sgfRecord.white_player =
      white_player.trim() !== "" ? white_player.trim() : "?";
    sgfRecord.black_rank = black_rank || sgfRecord.black_rank;
    sgfRecord.white_rank = white_rank || sgfRecord.white_rank;
    sgfRecord.komi = komi || sgfRecord.komi;
    sgfRecord.result = result.trim() !== "" ? result.trim() : "?";

    // Modify sgf_data column with user's newly inputted values like komi, player_name (permanently alter sgf so Wgo.js can show updates too)

    const parsedSgfArray = jssgf.parse(sgfRecord.sgf_data);
    // Access the first SGF object in the array
    const parsedSgfObject = parsedSgfArray[0];

    // Check if game_date is a valid Date object
    if (
      sgfRecord.game_date instanceof Date &&
      !isNaN(sgfRecord.game_date.getTime())
    ) {
      parsedSgfObject.DT = sgfRecord.game_date.toISOString().split("T")[0];
    } else {
      // Handle invalid date (I think we need to put null here to pass the isDate: true model validation)
      parsedSgfObject.DT = null;
    }

    // Convert komi to string (and just to make sure, force all other fields to be strings too)
    parsedSgfObject.KM = String(sgfRecord.komi);
    parsedSgfObject.PB = String(sgfRecord.black_player);
    parsedSgfObject.PW = String(sgfRecord.white_player);
    parsedSgfObject.BR = String(sgfRecord.black_rank);
    parsedSgfObject.WR = String(sgfRecord.white_rank);
    parsedSgfObject.RE = String(sgfRecord.result);

    // Serialize it back to SGF format
    const modifiedSgfData = jssgf.stringify([parsedSgfObject]);

    // Update the database record
    sgfRecord.sgf_data = modifiedSgfData;

    // Explicitly run Sequelize validation
    try {
      await sgfRecord.validate();
    } catch (err) {
      if (err.name && err.name === "SequelizeValidationError") {
        err.errors.forEach((error) => {
          if (!errors[error.path]) {
            errors[error.path] = [];
          }
        });
      }
    }

    // Filter out Sequelize errors if a custom error for the same field exists.
    Object.keys(errors).forEach((key) => {
      if (errors[key].length > 1) {
        errors[key] = errors[key].filter(
          (msg) => !msg.startsWith("Validation")
        );
      }
    });

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        message: "Validation error",
        errors,
      });
    }

    // Save the record
    await sgfRecord.save();

    // Send the updated record in response
    res.status(200).json({
      sgf_id: sgfRecord.id.toString(),
      user_id: sgfRecord.user_id.toString(),
      sgf_data: sgfRecord.sgf_data,
      sgf_name: sgfRecord.sgf_name,
      black_player: sgfRecord.black_player,
      white_player: sgfRecord.white_player,
      black_rank: sgfRecord.black_rank,
      white_rank: sgfRecord.white_rank,
      game_date: moment.utc(sgfRecord.game_date).format("YYYY-MM-DD HH:mm:ss"),
      komi: sgfRecord.komi,
      result: sgfRecord.result,
      updatedAt: moment.utc(sgfRecord.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

// Suspend an SGF (do NOT delete the puzzles associated with it)
router.delete("/:sgf_id", requireAuth, async (req, res) => {
  try {
    // Find the SGF record based on the provided sgf_id
    const sgf = await Sgf.findOne({ where: { id: req.params.sgf_id } });

    if (!sgf) {
      return res.status(404).json({ message: "SGF couldn't be found" });
    }

    // Only allow the user that owns the sgf the ability to suspend it
    if (sgf.user_id !== req.user.id) {
      return res.status(403).json({ message: "Not authorized!" });
    }

    sgf.suspended = true;
    await sgf.save();

    // await Puzzle.update({ sgf_id: null }, { where: { sgf_id: req.params.sgf_id } });
    // await PotentialPuzzle.update({ sgf_id: null }, { where: { sgf_id: req.params.sgf_id } });
    // // Delete the SGF record
    // await sgf.destroy();

    // Return a success response
    return res.status(200).json({ message: "Successfully suspended SGF" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

// Create one line json to feed into KataGo AI analysis engine (from SGF specified by SGF id)
router.post("/:sgf_id/katago_json_input", requireAuth, async (req, res) => {
  try {
    // Check authorization and find the record
    const sgfRecord = await Sgf.findOne({ where: { id: req.params.sgf_id } });
    if (!sgfRecord) {
      return res.status(404).json({ error: "SGF not found!" });
    }
    if (sgfRecord.user_id !== req.user.id) {
      return res.status(403).json({ error: "Not authorized!" });
    }
    // Check if potential puzzles already exist for the given sgf id
    const existingPuzzles = await PotentialPuzzle.findAll({
      where: { sgf_id },
    });
    // Don't execute the code to create the one line katago json input if potential puzzles already exist for the given sgf
    if (existingPuzzles.length > 0) {
      return res
        .status(400)
        .json({ error: "Potential puzzles already exist for the given sgf!" });
    }

    const { sgf_data } = req.body;

    // Pass sgf_data into the sgf2OneLineJson_all_moves.py script
    const one_line_json = await python(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "katago",
        "sgf_to_oneLineJson_all_moves.py"
      )
    );

    const one_line_json_string = await one_line_json.sgf_to_one_line_json(
      sgf_data
    );

    return res.status(200).json(JSON.parse(one_line_json_string));
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Could not convert SGF into one line JSON",
    });
  }
});

module.exports = router;
