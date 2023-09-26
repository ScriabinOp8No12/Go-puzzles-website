const moment = require("moment");
const express = require("express");
const { python } = require("pythonia");
const path = require("path");
const jssgf = require("jssgf");
const { requireAuth } = require("../../utils/auth");
const { Sgf, PotentialPuzzle } = require("../../db/models");
const router = express.Router();

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

// Clean SGF and add comments for each potential puzzle so that Glift can render an array of potential puzzles
router.put("/:sgf_id/clean_sgf_add_comments", requireAuth, async (req, res) => {
  try {
    // Extract sgf_id from URL parameters
    const sgfId = req.params.sgf_id;

    // Extract other information from request body
    const sgfData = req.body.sgf_data;
    const katagoJsonOutput = req.body.katago_json_output;

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
    // console.log("processedOutput:", processedOutput) // properly shows an array of dictionaries of move number and correct move sequences

    // Fetch existing database records for the specified sgfId, in ascending order
    const existingRecords = await fetchDatabaseRecordsOrdered(sgfId);
    // console.log(existingRecords) // properly shows all potential puzzles records in ascending order (lowest to highest potential puzzle id)

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

    const final_sgf_strings = await cleanAndComment.add_comments_to_sgfs(
      cleanedSgfStrings,
      processedOutput
    );

    if (existingRecords.length !== (await final_sgf_strings.length)) {
      return res
        .status(400)
        .json({ message: "Mismatch in record and output lengths" });
    }

    for (let i = 0; i < (await final_sgf_strings.length); i++) {
      const sgf_string = await final_sgf_strings[i];
      const correspondingRecord = existingRecords[i];

      // Update the sgf_data column with the new sgf_string that includes comments for glift to render puzzles properly
      correspondingRecord.sgf_data = String(sgf_string);

      await correspondingRecord.save();
    }

    // properly displays array of sgf_strings in terminal
    // console.log(await final_sgf_strings[7])
    // const output = await final_sgf_strings[0]

    const resolved_final_sgf_strings = []

    for await (let final_sgf_string of final_sgf_strings) {
      resolved_final_sgf_strings.push(final_sgf_string)
    }

    return res.status(200).send(resolved_final_sgf_strings.join(''));

  } catch (err) {
    res.status(500).send({ message: `Error: ${err.message}` });
  }
});

// Now we can read from the database and pass each individual string into a glift component, it should be very straight forward to render them with glift as an array of sgfs
// ********* The thunk will call each endpoint one after another assuming the one before was successful! *******

module.exports = router;
