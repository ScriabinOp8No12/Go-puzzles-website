const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { User, Puzzle, Sgf } = require("../../db/models");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");

const router = express.Router();

// Get all SGFs of the current user (format like go4go.net)
router.get("/current", requireAuth, async (req, res) => {
  // when making a request to "get current user" on postman, and result is { "user": null}
  // we get a 401 unauthorized error "Authentication required"

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
      "result",
    ],
  });
  // use count aggregate function to get the total number of SGFs
  const numberOfSGFs = await Sgf.count({ where: { user_id: req.user.id } });

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
      black_rank: sgf.black_rank, // these are strings for now, will convert to integers (elo system) later
      white_rank: sgf.white_rank, // these are strings for now, will convert to integers (elo system) later
      result: sgf.result, // added this column to the migration/model/seeder
    })),
    // put count of SGFs outside of sgf array
    numberOfSGFs,
  };

  return res.json(formattedSGFs);
});

// Upload new SGFs (up to 10 at a time) to the current user's SGF table
router.post("/current", requireAuth, async (req, res) => {
  // should throw a 401 authentication error if no user logged in

  // Grab the data from the req.body
  const { sgf_data } = req.body;

  // Check if the sgf_data array contains more than 10 elements
  if (sgf_data.length > 10) {
    return res.status(400).json({
      message: "Bad Request",
      errors: {
        sgf_data: ["Can only upload up to 10 SGFs at once!"],
      },
    });
  }
  const sgfData = await Sgf.create({
    game_preview,
    id,
    user_id,
    createdAt,
    updatedAt,
    sgf_name,
    black_player,
    white_player,
    black_rank,
    white_rank,
    result,
  });
  return res.json(sgfData);
});
module.exports = router;
