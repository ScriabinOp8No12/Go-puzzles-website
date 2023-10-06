const express = require("express");
const helmet = require("helmet");
const { python } = require("pythonia");
const path = require("path");
const app = express();
const port = 3000; // port 3000

app.use(helmet()); // For basic security headers
app.use(express.json()); // For parsing application/json

// KataGo Analysis endpoint
app.post("/potential_puzzles/generate", async (req, res) => {
  try {
    const { one_line_json_string, sgf_id, sgf_data } = req.body;

    const jsonEncodedString = JSON.stringify(one_line_json_string);

    // Check if the required values are provided
    if (!one_line_json_string || !sgf_id || !sgf_data) {
      return res.status(400).json({ error: "Required parameters missing" });
    }

    // Import KataGo analysis script
    const GCP_sgf_to_largest_mistakes = await python(
      path.join(__dirname, "GCP_sgf_to_largest_mistakes.py")
    );

    const potential_puzzles = JSON.parse(
      await GCP_sgf_to_largest_mistakes.run_katago_analysis(jsonEncodedString)
    );

    // Add sgf_id and sgf_data to each puzzle in the array, so the client can use it in the next step
    for (let puzzle of potential_puzzles) {
      puzzle.sgf_id = sgf_id;
      puzzle.sgf_data = sgf_data;
    }

    // Need to match redux thunk structure for 3rd response, look at working route in backend

    // *************** This format (createdPuzzles: potential_puzzles) MIGHT be different than our redux thunk endpoint right now! *********************** //
    // Since we're not saving to a database on the VM, just directly send back the processed puzzles
    return res.status(200).json({ createdPuzzles: potential_puzzles }); // I think our redux thunk wants it back as "createdPuzzles:"
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

// Error Handling
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    // stack: err.stack,  // Given this is an internal server, we don't really need to show the stack
  });
});

const IP_ADDRESS = "0.0.0.0";
// const IP_ADDRESS = '34.118.131.136' // change to this later
app.listen(port, () => {
  console.log(`Server running on http://${IP_ADDRESS}:${port}`);
});

module.exports = app;
