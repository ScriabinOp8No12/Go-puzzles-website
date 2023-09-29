const moment = require("moment");
const express = require("express");
const { python } = require("pythonia");
const path = require("path");
const jssgf = require("jssgf");
const { requireAuth } = require("../../utils/auth");
const { Sgf, PotentialPuzzle } = require("../../db/models");
const router = express.Router();

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Trigger KataGo analysis (/potential_puzzles/generate)
router.post("/generate", requireAuth, async (req, res) => {
  try {
    const { sgf_id, sgf_data, one_line_json_string } = req.body;
    // Check if potential puzzles already exist for the given sgf id
    const existingPuzzles = await PotentialPuzzle.findAll({
      where: { sgf_id },
    });
    // Don't analyze the game for mistakes if potential puzzles already exist for the given sgf
    if (existingPuzzles.length > 0) {
      return res
        .status(400)
        .json({ error: "Potential puzzles already exist for the given sgf!" });
    }

    const jsonEncodedString = JSON.stringify(one_line_json_string);
    console.log("Input to KataGo Analysis:", jsonEncodedString);

    // Import KataGo analysis script
    const sgf_to_largest_mistakes = await python(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "katago",
        "sgf_to_largest_mistakes.py"
      )
    );

    // console.log("******************* 1")

    const potential_puzzles = JSON.parse(
      await sgf_to_largest_mistakes.run_katago_analysis(jsonEncodedString)
    );

    // console.log("******************* 2")

    const category = "other";
    const difficulty = 1500; // MAKE IT DYNAMIC LATER!  Make a function in utils folder, and import it here, it converts the Go rank into elo rank
    // const status = "queued";
    // const job_id = null;

    const createdPuzzles = [];
    // Each puzzle needs to have it's own move number and solution coordinates
    for (const puzzle of potential_puzzles) {
      const move_number = puzzle.move;
      const solution_coordinates = JSON.stringify(puzzle.correct_moves);

      const createdPuzzle = await PotentialPuzzle.create({
        sgf_id,
        sgf_data,
        category,
        move_number,
        solution_coordinates,
        difficulty,
        // status,
        // job_id,
      });

      createdPuzzles.push(createdPuzzle);
    }

    //  console.log("******************* 3")

    const formattedPuzzles = createdPuzzles.map((puzzle) => ({
      ...puzzle.get(),
      solution_coordinates: JSON.parse(puzzle.solution_coordinates), // parse the string to an object
      // solution_coordinates: JSON.parse(puzzle.solution_coordinates.replace(/'/g, "\"")),
      createdAt: moment(puzzle.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment(puzzle.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
    }));

    return res.status(200).json({ createdPuzzles: formattedPuzzles });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

// Uses various python scripts (imported with Pythonia) to mutate SGF for glift
// 1. Cleans SGF of unnecessary properties, especially comments, destroys SGF from puzzle number to end of game
// 2. Updates SGF with comments and adds comments to follow up variations
// 3. Draws a thumbnail of the Go board based on the move number of the mistake, also mutates thumbnail column of potential puzzles table

router.put(
  "/:sgf_id/clean_sgf_add_comments_add_thumbnail",
  requireAuth,
  async (req, res) => {
    try {

      const sgfId = req.params.sgf_id;
      //
      const sgf = await Sgf.findByPk(sgfId)
      const sgfThumbnail = sgf.thumbnail
      //
      const sgfData = req.body.sgf_data;

      const katagoJsonOutput = req.body.katago_json_output;

      // **** Remove this function below, and fetch the sgf.thumbnail column and return it in the response!

      // I'm pretty sure the database record will always be sorted properly in ascending order, so this
      // function could be completely redundant or actually cause problems later?
      const fetchDatabaseRecordsOrdered = async (sgfId) => {
        return await PotentialPuzzle.findAll({
          where: { sgf_id: sgfId },
          order: [
            // id is the primary key column of our PotentialPuzzles's id column, we want to mutate the associated sgf_data text strings in order
            // because the KataGo output is stored in the database in order from first mistake to last mistake in the game
            ["id", "ASC"],
          ],
        });
      };

      // Grab the move_numbers column data for determining how to draw the potential puzzle's thumbnail
      const moves = await PotentialPuzzle.findAll({
        attributues: ["move_number"],
      });

      // Initialize Python script for cleaning and commenting SGF
      const cleanAndComment = await python(
        path.join(
          __dirname,
          "..",
          "..",
          "..",
          "katago",
          "clean_sgf_add_comments.py"
        )
      );

      // Initialize Python script for generating thumbnail of Go board
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

      // Process katago output with Python function
      const processedOutput = await cleanAndComment.process_katago_output(
        katagoJsonOutput
      );

      // Fetch existing database records for the specified sgfId, in ascending order
      const existingRecords = await fetchDatabaseRecordsOrdered(sgfId);

      const cleanedSgfStrings = [];

      // Generate cleaned SGF strings and update database records in order
      for (let i = 0; i < (await processedOutput.length); i++) {
        const outputDict = await processedOutput[i];

        for (const moveNumber in await outputDict) {
          const cleanedSgfString = await cleanAndComment.clean_sgf(
            sgfData,
            Number(moveNumber)
          );

          cleanedSgfStrings.push(cleanedSgfString);
        }
      }

      // Inject comments into SGF based on KataGo analysis output, Glift determines a puzzle is correct if there's a comment saying "CORRECT" for that move
      const final_sgf_strings = await cleanAndComment.add_comments_to_sgfs(
        cleanedSgfStrings,
        processedOutput
      );

      if (existingRecords.length !== (await final_sgf_strings.length)) {
        return res
          .status(400)
          .json({ message: "Mismatch in record and output lengths" });
      }

      // ************************ Thumbnail portion *****************************************************

      const thumbnailUrls = {}; // Object to store moveNumber: httpsThumbnailUrl pairs.

      for await (let move of moves) {
        let moveNumber = move.move_number;

        const thumbnailBase64 = await sgf2img.generatePreview(
          sgfData,
          moveNumber - 1 // we need to draw the thumbnail for the move before the move_number of the mistake (move_number value in database)
        );
        const uploadResponse = await cloudinary.uploader.upload(
          `data:image/png;base64,${thumbnailBase64}`
        );
        const thumbnailUrl = uploadResponse.url;
        const httpsThumbnailUrl = thumbnailUrl.replace("http://", "https://");
        thumbnailUrls[moveNumber] = httpsThumbnailUrl;
        // Find the right record to update based on moveNumber
        const recordToUpdate = existingRecords.find(
          (record) => record.move_number === moveNumber
        );
        if (recordToUpdate) {
          recordToUpdate.thumbnail = httpsThumbnailUrl;
          await recordToUpdate.save();
        }
      }

      //  ************************ Thumbnail portion end *********************************** //

      // ******************* Updating sgf_data and thumbnail columns ************************ //

      for (let i = 0; i < (await final_sgf_strings.length); i++) {
        const sgf_string = await final_sgf_strings[i];
        const correspondingRecord = existingRecords[i];

        // Update the sgf_data column in the database with the new sgf_string that includes comments
        correspondingRecord.sgf_data = String(sgf_string);

        await correspondingRecord.save();
      }

      // Pythonia needs everything awaited, if we don't do the block below, postman doesn't return the strings at all
      const resolved_final_sgf_strings = [];

      for await (let final_sgf_string of final_sgf_strings) {
        resolved_final_sgf_strings.push(final_sgf_string);
      }

      const orderedThumbnailUrls = existingRecords.map(
        (record) => thumbnailUrls[record.move_number]
      );

      return res.status(200).send({
        sgfStrings: resolved_final_sgf_strings.map(sgf => sgf.replace(/\n/g, "")),
        thumbnails: orderedThumbnailUrls,
        sgfThumbnail: sgfThumbnail
      });
    } catch (err) {
      res.status(500).send({ message: `Error: ${err.message}` });
    }
    // Now we can read from the database and pass each individual string into a glift component, it should be very straight forward to render them with glift as an array of sgfs
    // ********* The thunk will call each endpoint one after another assuming the one before was successful! *******
  }
);

module.exports = router;
