const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { User, UserPuzzle, Puzzle, Sgf } = require("../../db/models");
// const { incrementTimesSolved } = require("../../db/models/puzzle-utils"); // For incrementing times solved, see utils folder for likely not working code lol
const {calculateNewElo} = require("../../utils/elo-ranking-utils")
const { Op } = require("sequelize");
const moment = require("moment");

const router = express.Router();

const conditionalAuth = (req, res, next) => {
  if (req.query.source === "own") {
    return requireAuth(req, res, next);
  }
  return next();
};

// Get all puzzles for home / landing page (20 by default) or for user's puzzles (if source is own, that's the conditional Auth)
router.get("/", conditionalAuth, async (req, res, next) => {
  try {
    // Destructure query parameters from request
    let {
      source,
      min_rank,
      max_rank,
      difficulty,
      move_number,
      category,
      board_size,
      min_votes,
      max_votes,
      limit,
      offset,
    } = req.query;

    // Default to 20 puzzles (per page) if not specified
    limit = parseInt(limit) || 20;

    // Initialize the where clause for filtering records
    const where = {};

    // Filter by user if 'source' is 'own' and user is authenticated, this is for displaying user's puzzles (not public puzzles on landing page)
    if (source === "own" && req.user) {
      where.user_id = req.user.id;
    }

    // Setting filtering conditions based on query parameters
    if (min_rank) where.difficulty_rank = { [Op.gte]: min_rank };
    if (max_rank)
      where.difficulty_rank = { ...where.difficulty_rank, [Op.lte]: max_rank };
    if (difficulty) where.difficulty = difficulty;
    if (move_number) where.move_number = move_number;
    if (category) where.category = category;
    if (board_size) where.board_size = board_size;
    if (min_votes) where.vote_count = { [Op.gte]: min_votes };
    if (max_votes)
      where.vote_count = { ...where.vote_count, [Op.lte]: max_votes };

    // Prepare query options for Sequelize
    const options = {
      where,
      limit, // set the limit here
      offset: parseInt(offset) || 0, // Default offset to 0 if not specified, which means we would get puzzles 1-20 by default, if offset is 20, then we would get 21-40
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    };
    // Fetch puzzles from database using Sequelize
    const puzzles = await Puzzle.findAll(options);

    // Transform the resulting array of puzzles to desired format (using moment js for time)
    const formattedPuzzles = puzzles.map((puzzle) => {
      return {
        // changed from puzzle_id: puzzle.id
        id: puzzle.id,
        sgf_data: puzzle.sgf_data,
        solution_coordinates: puzzle.solution_coordinates,
        category: puzzle.category,
        move_number: puzzle.move_number,
        difficulty_rank: puzzle.difficulty_rank,
        description: puzzle.description,
        is_user_puzzle: puzzle.user_id === (req.user ? req.user.id : false),
        vote_count: puzzle.vote_count,
        thumbnail: puzzle.thumbnail,
        suspended: puzzle.suspended,
        createdAt: moment(puzzle.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: moment(puzzle.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
      };
    });

    return res.status(200).json({ puzzles: formattedPuzzles });
  } catch (error) {
    next(error);
  }
});

// Get puzzle by puzzle id
router.get("/:puzzle_id", async (req, res) => {
  const puzzleId = req.params.puzzle_id;

  try {
    const puzzle = await Puzzle.findOne({
      where: { id: puzzleId },
      attributes: [
        "id",
        "sgf_data",
        "solution_coordinates",
        "category",
        "move_number",
        "description",
        "is_user_puzzle",
        "vote_count",
        "suspended",
        "createdAt",
        "updatedAt",
      ],
    });

    if (!puzzle) return res.status(404).json({ error: "Puzzle not found" });

    const formattedPuzzle = {
      // changed from puzzle_id: puzzle.id
      id: puzzle.id,
      sgf_data: puzzle.sgf_data,
      solution_coordinates: puzzle.solution_coordinates,
      category: puzzle.category,
      move_number: puzzle.move_number,
      description: puzzle.description,
      is_user_puzzle: puzzle.is_user_puzzle,
      vote_count: puzzle.vote_count,
      suspended: puzzle.suspended,
      createdAt: moment(puzzle.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment(puzzle.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
    };

    return res.status(200).json(formattedPuzzle);
  } catch (error) {
    console.error("Query failed :", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Updates user and puzzle rankings after a puzzle attempt
router.post("/:puzzleId/ranking/update", requireAuth, async (req, res) => {
  // calculateNewElo function that we imported into this file gives an output like this: [1020, 1080] which represents the new player's elo, then the new puzzle's elo as an array
  try {
    const userId = req.user.id;
    const { puzzleId } = req.params;
    const { isWin } = req.body;

    // Fetch the user and the puzzle from the database
    const user = await User.findByPk(userId);
    const puzzle = await Puzzle.findByPk(puzzleId);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if puzzle exists
    if (!puzzle) {
      return res.status(404).json({ error: "Puzzle not found" });
    }

    // Check for existing entry in user_puzzles
    const userPuzzle = await UserPuzzle.findOne({
      where: { user_id: userId, puzzle_id: puzzleId },
    });

    if (userPuzzle && userPuzzle.completed) {
      return res
        .status(403)
        .json({
          message:
            "Ranking for this puzzle has already been updated for this user.",
        });
    }

    console.log("old user and puzzle rank: ", user.rank, puzzle.difficulty)
    // Calculate new ELO ratings
    const [newUserRank, newPuzzleRank] = calculateNewElo(
      user.rank,
      puzzle.difficulty,
      isWin
    );

    console.log("newUserRank, newPuzzleRank: ", newUserRank, newPuzzleRank)

    // Update user and puzzle in the database
    user.rank = newUserRank;
    puzzle.difficulty = newPuzzleRank;

    // Update user_puzzles table
    if (userPuzzle) {
      userPuzzle.completed = true;
      await userPuzzle.save();
    } else {
      // If the userPuzzle doesn't exist, then create it by adding the user_id, puzzle_id, and setting completed to true
      // This will happen most of the time, since there will be a puzzle that the user is trying, and it won't be in their userpuzzle table yet
      // But for seed data, this block won't execute because the userpuzzle list will have seed data there already
      await UserPuzzle.create({
        user_id: userId,
        puzzle_id: puzzleId,
        completed: true,
      });
    }

    await user.save();
    await puzzle.save();

    // Send updated rankings
    return res
      .status(200)
      .json({ newUserRank: newUserRank, newPuzzleRank: newPuzzleRank });
  } catch (error) {
    // Error handling
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating rankings" });
  }
});

// **** Maybe move this below route to a new "userpuzzles.js" route instead of having it here?
// Update completed field in UserPuzzle record and increment times_solved field in Puzzle record
// router.put("/:puzzleId/complete", requireAuth, async (req, res, next) => {
//   const puzzleId = req.params.puzzleId;
//   const userId = req.user.id;

//   try {
//     // Fetch the associated UserPuzzle record
//     const userPuzzleRecord = await UserPuzzle.findOne({
//       where: {
//         user_id: userId,
//         puzzle_id: puzzleId,
//       },
//     });

//     if (!userPuzzleRecord) {
//       return res.status(404).json({
//         success: false,
//         message: "No matching UserPuzzle record found.",
//       });
//     }

//     // Update the 'completed' field in the UserPuzzle record
//     userPuzzleRecord.completed = true;
//     await userPuzzleRecord.save();

//     // Increment the 'times_solved' field in the Puzzle record
//     await incrementTimesSolved(puzzleId, sequelize);

//     return res
//       .status(200)
//       .json({ success: true, message: "Puzzle marked as completed." });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
