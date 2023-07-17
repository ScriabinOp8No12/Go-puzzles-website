const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { User, Puzzle, Sgf } = require("../../db/models");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");

const router = express.Router();

// Get all SGFs of the current user (format like go4go.net)
router.get("/current", requireAuth, async (req, res) => {
  // should throw a 401 authentication error if no user logged in
  // Find all SGFs owned by the current logged in user
  // Retrieve the SGFs for the specified user
  const sgfs = await Sgf.findAll({
    // compare SGF table's user_id value (owner of the SGFs)
    // and the logged in user (req.user.id)
    where: { user_id: req.user.id },
    attributes: [
      "id",
      "user_id",
      "game_preview",
      "createdAt",
      "updatedAt",
      "sgf_name",
      "sgf_data",
      "black_player",
      "white_player",
      "black_rank",
      "white_rank",
      // "result",
      // "numberOfPuzzles",
    ],
  });

  // Format the response body
  const formattedSGFs = {
    SGFs: sgfs.map((sgf) => ({
      id: sgf.id,
      user_id: sgf.user_id,
      game_preview: sgf.game_preview,
      createdAt: sgf.createdAt,
      updatedAt: sgf.updatedAt,
      sgf_name: sgf.sgf_name,
      sgf_data: sgf.sgf_data,
      black_player: sgf.black_player,
      white_player: sgf.white_player,
      black_rank: sgf.black_rank,
      white_rank: sgf.white_rank,
      // result: sgf.result,
      // numberOfPuzzles: Number(sgf.numberOfPuzzles),
    })),
  };

  return res.json(formattedSGFs);
});
module.exports = router;
