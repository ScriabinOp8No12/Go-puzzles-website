const moment = require("moment");
const express = require("express");
const { python } = require("pythonia");
const path = require("path");
const { requireAuth } = require("../../utils/auth");
const { Sgf, PotentialPuzzle } = require("../../db/models");
// const {captureSGFInfo} = require("./sgfs.js")
const router = express.Router();

// Trigger KataGo analysis (/potential_puzzles/generate)
router.post("/generate", requireAuth, async (req, res) => {
  try {
    const { one_line_json_string } = req.body;
    // const { sgf_id, sgf_data } = req.sgfInfo;
    const jsonEncodedString = JSON.stringify(one_line_json_string);

    // Import KataGo analysis script
    const sgf_to_largest_mistakes_for_endpoint = await python(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "katago",
        "sgf_to_largest_mistakes_for_ENDPOINT.py"
      )
    );

    const potential_puzzles = JSON.parse(await sgf_to_largest_mistakes_for_endpoint.run_katago_analysis(jsonEncodedString));

    const category = "yourCategory";
    const difficulty = 1500;
    const status = "queued";
    const job_id = 15;

    const createdPuzzles = [];

    for (const puzzle of potential_puzzles) {
      const move_number = puzzle.move;
      const solution_coordinates = JSON.stringify(puzzle.correct_moves);

      const createdPuzzle = await PotentialPuzzle.create({
        sgf_id: 1,
        sgf_data: "test",
        category,
        move_number,
        solution_coordinates,
        difficulty,
        status,
        job_id,
      });

      createdPuzzles.push(createdPuzzle);
    }

    return res.status(200).json({ createdPuzzles });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred while processing your request." });
  }
});


module.exports = router;
