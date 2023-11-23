const moment = require("moment");
const express = require("express");
const { python } = require("pythonia");
const path = require("path");
const jssgf = require("jssgf");
const { requireAuth } = require("../../utils/auth");
const { Sgf, PotentialPuzzle, Puzzle } = require("../../db/models");
const router = express.Router();
const Sequelize = require("sequelize");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
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

    sgf_id = req.params.sgf_id;
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

// Trigger KataGo analysis LOCALLY only, GCP VM is at the endpoint found in the VM itself!!!!
router.post("/generate", requireAuth, async (req, res) => {
  try {
    const { sgf_id, sgf_data, one_line_json_string } = req.body;

    const jsonEncodedString = JSON.stringify(one_line_json_string);

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

    const potential_puzzles = JSON.parse(
      await sgf_to_largest_mistakes.run_katago_analysis(jsonEncodedString)
    );

    const category = "other";
    const difficulty = 1500; // MAKE IT DYNAMIC LATER!  Make a function in utils folder, and import it here, it converts the Go rank into elo rank

    const createdPuzzles = [];
    // Each puzzle needs to have it's own move number and solution coordinates
    for (const puzzle of potential_puzzles) {
      const move_number = puzzle.move;
      const solution_coordinates = JSON.stringify(puzzle.correct_moves);

      const createdPuzzle = await PotentialPuzzle.create({
        sgf_id,
        user_id: req.user.id,
        sgf_data,
        category,
        move_number,
        solution_coordinates,
        difficulty,
      });

      createdPuzzles.push(createdPuzzle);
    }

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
// Updating thumbnail moved to post /puzzles instead

router.put("/:sgf_id/clean_sgf_add_comments", requireAuth, async (req, res) => {
  try {
    const sgfId = req.params.sgf_id;
    const sgfData = req.body.sgf_data;
    const katagoJsonOutput = req.body.katago_json_output;

    // **** Remove this function below??? and fetch the sgf.thumbnail column and return it in the response!

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

    return res.status(200).send({
      sgfStrings: resolved_final_sgf_strings.map((sgf) =>
        sgf.replace(/\n/g, "")
      ),
      // thumbnails: orderedThumbnailUrls,
    });
  } catch (err) {
    res.status(500).send({ message: `Error: ${err.message}` });
  }
});

// Get all sgf thumbnails + sgf ids of potential puzzles
router.get("/", requireAuth, async (req, res) => {
  const userId = req.user.id;
  // make join query to get associated sgf.thumbnail based on specific sgf.id from our potential puzzles table
  try {
    const potentialPuzzleThumbnails = await PotentialPuzzle.findAll({
      where: { user_id: userId }, // Only display the potential puzzles for the potential puzzles of the logged in user
      attributes: ["sgf_id", "createdAt", "updatedAt"],
      include: [
        {
          model: Sgf,
          attributes: ["thumbnail"],
        },
      ],
      raw: true,
    });

    const potentialPuzzleCounts = await PotentialPuzzle.count({
      where: { user_id: userId }, // Only display the potential puzzles count for the potential puzzles of the logged in user
      attributes: ["sgf_id"],
      group: ["sgf_id"],
      raw: true,
    });
    const countsBySgfId = Object.fromEntries(
      potentialPuzzleCounts.map(({ sgf_id, count }) => [sgf_id, count])
    );

    // Remove duplicates since each sgf_id is likely to appear multiple times (we have many potential puzzles for the same sgf_id)
    const uniqueResults = Array.from(
      new Set(potentialPuzzleThumbnails.map((p) => p.sgf_id))
    ).map((sgf_id) =>
      potentialPuzzleThumbnails.find((p) => p.sgf_id === sgf_id)
    );

    const formattedResults = uniqueResults.map((puzzle) => {
      return {
        sgf_id: puzzle.sgf_id,
        "Sgf.thumbnail": puzzle["Sgf.thumbnail"],
        createdAt: moment(puzzle.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: moment(puzzle.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
      };
    });

    return res.status(200).json({
      PotentialPuzzles: formattedResults,
      CountsBySgfId: countsBySgfId,
    }); // Include the counts in the response
  } catch (error) {
    console.error(
      "Failed to retrieve sgf thumbnail for potential puzzles",
      error
    );
    res.status(500).send("Internal Server Error");
  }
});

// Get all potential_puzzles based on sgf_id
router.get("/:sgf_id", requireAuth, async (req, res) => {
  const sgfId = req.params.sgf_id;
  const userId = req.user.id; // grab the logged in user's id
  // Find all records where the sgf_id matches the one in the url
  const potentialPuzzles = await PotentialPuzzle.findAll({
    where: { sgf_id: sgfId, user_id: userId },
    attributes: [
      "id",
      "user_id",
      "sgf_id",
      "sgf_data",
      "category",
      "move_number",
      "solution_coordinates", // maybe convert to string if stuff doesn't work?
      "difficulty",
      "thumbnail",
    ],
  });

  if (potentialPuzzles.length === 0) {
    return res.status(404).json({
      error:
        "Sgf with potential puzzles not found or you don't have permission to access this resource",
    });
  }

  // Format the SGF data for the response
  const formattedPotentialPuzzles = potentialPuzzles.map((puzzle) => ({
    sgf_id: puzzle.sgf_id,
    user_id: puzzle.user_id,
    sgf_data: puzzle.sgf_data,
    category: puzzle.category,
    move_number: puzzle.move_number,
    solution_coordinates: puzzle.solution_coordinates,
    difficulty: puzzle.difficulty,
    thumbnail: puzzle.thumbnail,
    createdAt: moment(puzzle.createdAt).format("YYYY-MM-DD HH:mm:ss"),
    updatedAt: moment(puzzle.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
  }));

  return res.status(200).json(formattedPotentialPuzzles);
});

// Take Google Cloud VM output and store it in our database!
router.post("/store_vm_results", async (req, res) => {
  try {
    const potential_puzzles = req.body.createdPuzzles;

    const category = "other";
    const difficulty = 1500;

    const createdPuzzles = [];

    for (const puzzle of potential_puzzles) {
      const { sgf_id, sgf_data, move_number } = puzzle;
      // Convert solution_coordinates object to string for storing in database
      const solution_coordinates_string = JSON.stringify(
        puzzle.solution_coordinates
      );

      const createdPuzzle = await PotentialPuzzle.create({
        sgf_id,
        user_id: req.user.id, // need to add user_id here now too because changed our database to include this column
        sgf_data,
        category,
        move_number,
        solution_coordinates: solution_coordinates_string,
        difficulty,
      });

      createdPuzzles.push(createdPuzzle);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

// Convert potential puzzle to use AB and AW instead
app.put("/:sgf_id/convert_to_AB_AW", requireAuth, async (req, res) => {
  try {
    const sgfId = req.params.sgf_id;

    // Fetch the SGF data from the database using sgfId
    const potentialPuzzleRecords = await PotentialPuzzle.findAll({
      where: { sgf_id: sgfId },
    });

    // Check if the record exists
    if (potentialPuzzleRecords.length === 0) {
      return res.status(404).json({ message: "Potential puzzle not found" });
    }

    let mutatedPuzzles = [];

    // Process each puzzle record
    for (const puzzleRecord of potentialPuzzleRecords) {
      const originalSgfData = puzzleRecord.sgf_data;

      // Pass sgf_data into the convert_to_AB_AW.py script
      const AB_AW = await python(
        path.join(__dirname, "..", "..", "..", "katago", "convert_to_AB_AW.py")
      );

      const processed_AB_AW_SGF = await AB_AW.convert_sgf_data_to_AB_AW(
        originalSgfData
      );
      // Update the database record with the mutated SGF data
      await puzzleRecord.update({
        sgf_data: processed_AB_AW_SGF,
      });
      // Add the mutated SGF data to the array
      mutatedPuzzles.push(processed_AB_AW_SGF);
    }

    // Send a response indicating success
    res.status(200).json({ mutatedPuzzles });
  } catch (error) {
    console.error("Error in mutating SGF data:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
