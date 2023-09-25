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
    const sgf_to_largest_mistakes_for_endpoint = await python(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "katago",
        "sgf_to_largest_mistakes_for_endpoint.py"
      )
    );

    const potential_puzzles = JSON.parse(
      await sgf_to_largest_mistakes_for_endpoint.run_katago_analysis(
        jsonEncodedString
      )
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

    const formattedPuzzles = createdPuzzles.map(puzzle => ({
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
router.put("/clean_sgf_add_comments", requireAuth, (req, res) => {
  //
})

module.exports = router;
