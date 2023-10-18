const moment = require("moment");
const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Sgf, PotentialPuzzle, Puzzle, UserPuzzle } = require("../../db/models");
const router = express.Router();

router.get("/", requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;

    const userPuzzles = await UserPuzzle.findAll({
      where: { user_id: userId, completed: true },
      // the userPuzzles is a join table, and we will display the puzzle to the user under the "your puzzles" component
      // if the completed boolean flag is set to true, it means the user has attempted the public puzzle
      // this flag is mostly for making sure the user can't keep attempting the same public puzzle (by refreshing the page) and continue getting points
      include: [
        {
          model: Puzzle,
        },
      ],
    });

    res.status(200).json(userPuzzles);
  } catch (error) {
    console.error("Failed to retrieve puzzles for user", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
