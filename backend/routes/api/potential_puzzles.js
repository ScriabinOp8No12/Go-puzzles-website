const moment = require("moment");
const express = require("express");
const { python } = require("pythonia");
const { requireAuth } = require("../../utils/auth");
const { Sgf } = require("../../db/models");

const router = express.Router();

// Trigger KataGo analysis (/potential_puzzles/generate)
router.post("/generate", requireAuth, async (req, res) => {

  const { one_line_json_string } = req.body;

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

  const potential_puzzles = await sgf_to_largest_mistakes_for_endpoint.run_katago_analysis(one_line_json_string)

  return res.status(200).json({potential_puzzles})
});

module.exports = router;
