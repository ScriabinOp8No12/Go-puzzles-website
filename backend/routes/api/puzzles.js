const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { User, UserPuzzle, Puzzle, Sgf } = require("../../db/models");
const { Op } = require("sequelize");

const router = express.Router();

const conditionalAuth = (req, res, next) => {
  if (req.query.source === 'own') {
    return requireAuth(req, res, next);
  }
  return next();
};

router.get("/api/puzzles", conditionalAuth, async (req, res, next) => {
  try {
    let {
      source,
      completed,
      min_rank,
      max_rank,
      difficulty,
      move_number,
      category,
      board_size,
      user_id,
      min_votes,
      max_votes
    } = req.query;

    const where = {};

    if (source === 'own' && req.user) {
      where.user_id = req.user.id;
    } else if (user_id) {
      where.user_id = user_id;
    }

    if (completed !== undefined) where.completed = completed === 'true';
    if (min_rank) where.difficulty_rank = { [Op.gte]: min_rank };
    if (max_rank) where.difficulty_rank = { ...where.difficulty_rank, [Op.lte]: max_rank };
    if (difficulty) where.difficulty = difficulty;
    if (move_number) where.move_number = move_number;
    if (category) where.category = category;
    if (board_size) where.board_size = board_size;
    if (min_votes) where.vote_count = { [Op.gte]: min_votes };
    if (max_votes) where.vote_count = { ...where.vote_count, [Op.lte]: max_votes };

    const options = {
      where,
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    };

    const puzzles = await Puzzle.findAll(options);

    const formattedPuzzles = puzzles.map((puzzle) => {
      return {
        puzzle_id: puzzle.id,
        category: puzzle.category,
        move_number: puzzle.move_number,
        difficulty_rank: puzzle.difficulty_rank,
        description: puzzle.description,
        completed: puzzle.completed,
        is_user_puzzle: puzzle.user_id === (req.user ? req.user.id : null),
        vote_count: puzzle.vote_count,
        thumbnail: puzzle.thumbnail,
        createdAt: puzzle.createdAt,
        updatedAt: puzzle.updatedAt,
        username: puzzle.User.username
      };
    });

    return res.status(200).json({ puzzles: formattedPuzzles });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
