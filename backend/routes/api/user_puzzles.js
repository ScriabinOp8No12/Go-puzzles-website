const moment = require("moment");
const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Sgf, PotentialPuzzle, Puzzle, UserPuzzle } = require("../../db/models");
const router = express.Router();


router.get("/", requireAuth, async(req, res) => {
  try {
    const userId = req.user.id;

    const userPuzzles = await UserPuzzle.findAll({
      where: { user_id: userId },
      include: [{
        model: Puzzle,
      }]
    });

    res.status(200).json(userPuzzles);

  } catch (error) {
    console.error("Failed to retrieve puzzles for user", error);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;