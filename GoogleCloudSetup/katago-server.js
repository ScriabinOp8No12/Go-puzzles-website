const https = require('https');
const fs = require('fs');
const express = require("express");
const helmet = require("helmet");
const cors = require('cors');
const moment = require("moment");
const { python } = require("pythonia");
const path = require("path");
const app = express();
// const port = 3000; // port 3000

app.use(helmet()); // For basic security headers
app.use(cors());
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

    const category = "other";
    const difficulty = 1500;

    const formattedPuzzles = potential_puzzles.map((puzzle) => {
      return {
        thumbnail:
          "https://res.cloudinary.com/dn8rdavoi/image/upload/v1693682857/no_image_thumbnail_tpwuc0.jpg",
        sgf_id: req.body.sgf_id,
        sgf_data: req.body.sgf_data,
        category,
        move_number: puzzle.move,
        solution_coordinates: puzzle.correct_moves,
        difficulty,
        createdAt: moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: moment(new Date().toISOString()).format("YYYY-MM-DD HH:mm:ss"),
      };
    });

    // Need to match redux thunk structure for 3rd response, look at working route in backend

    return res.status(200).json({ createdPuzzles: formattedPuzzles });
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

const privateKey = fs.readFileSync('/etc/letsencrypt/live/vm.go-puzzles.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/vm.go-puzzles.com/fullchain.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/vm.go-puzzles.com/chain.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

const IP_ADDRESS = "0.0.0.0";
// const IP_ADDRESS = '34.118.131.136' // change to this later
// app.listen(port, () => {
//  console.log(`Server running on http://${IP_ADDRESS}:${port}`);
// });

const port = 443;

const httpsServer = https.createServer(credentials, app);
httpsServer.listen(port, () => {
  console.log(`HTTPS Server running on https://${IP_ADDRESS}:${port}`);
});

module.exports = app;
