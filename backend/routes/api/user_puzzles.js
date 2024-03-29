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

    // Format the dates using moment.js
    const formattedUserPuzzles = userPuzzles.map((userPuzzle) => {
      return {
        ...userPuzzle.get(),  // Spread to get all the other fields
        createdAt: moment(userPuzzle.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: moment(userPuzzle.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
        // Also format Puzzle's createdAt and updatedAt
        Puzzle: {
          ...userPuzzle.Puzzle.get(),
          createdAt: moment(userPuzzle.Puzzle.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          updatedAt: moment(userPuzzle.Puzzle.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
        }
      };
    });
    res.status(200).json(formattedUserPuzzles);

  } catch (error) {
    console.error("Failed to retrieve puzzles for user", error);
    res.status(500).send("Internal Server Error");
  }
});

// Get a single "userpuzzles" based on puzzle_id
router.get("/:puzzle_id", requireAuth, async (req, res) => {
  try {
    const puzzleId = req.params.puzzle_id;
    const userId = req.user.id;

    const userPuzzle = await UserPuzzle.findOne({
      where: { puzzle_id: puzzleId, user_id: userId },
      include: [ { model: Puzzle } ] // Include associated Puzzle model
    });

    if (!userPuzzle) {
      return res.status(404).json({ error: "User puzzle not found or you don't have permission to access this resource" });
    }

    const formattedUserPuzzle = {
      ...userPuzzle.get(),
      createdAt: moment(userPuzzle.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment(userPuzzle.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
    };

    return res.status(200).json(formattedUserPuzzle);
  } catch (error) {
    console.error("Failed to retrieve user puzzle", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
