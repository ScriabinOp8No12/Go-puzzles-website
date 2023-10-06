const express = require("express");
const helmet = require("helmet");
const python = require('pythonia');

const app = express();
const port = 3000; // port 3000

app.use(helmet());  // For basic security headers
app.use(express.json()); // For parsing application/json

// KataGo Analysis endpoint
app.post("/potential_puzzles/generate", async (req, res) => {

  try {
    const { one_line_json_string } = req.body;
    const jsonEncodedString = JSON.stringify(one_line_json_string);

    // Import KataGo analysis script
    const sgf_to_largest_mistakes = await python(
      path.join(
        __dirname,
        "..",
        "sgf_to_largest_mistakes.py"
      )
    );

    const potential_puzzles = JSON.parse(
      await sgf_to_largest_mistakes.run_katago_analysis(jsonEncodedString)
    );

    // *************** This format is different than our redux thunk endpoint right now!!!!!! *********************** //
    // Since we're not saving to a database on the VM, just directly send back the processed puzzles
    return res.status(200).json({ potentialPuzzles: potential_puzzles });

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

const IP_ADDRESS = '0.0.0.0'
// const IP_ADDRESS = '34.118.131.136' // change to this later
app.listen(port, () => {
    console.log(`Server running on http://${IP_ADDRESS}:${port}`);
});

module.exports = app;
