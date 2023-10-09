const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { User, UserPuzzle, Puzzle, Sgf, PotentialPuzzle } = require("../../db/models");
// const { incrementTimesSolved } = require("../../db/models/puzzle-utils"); // For incrementing times solved, see utils folder for likely not working code lol
const { calculateNewElo } = require("../../utils/elo-ranking-utils");
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
      // min_rank,
      // max_rank,
      // difficulty,
      move_number,
      category,
      board_size,
      min_votes, // "vote_count": for admin to suspend/delete public puzzle if too many downvotes
      max_votes,
      limit,
      offset,
    } = req.query;

    // Default to 20 puzzles (per page) if not specified
    limit = parseInt(limit) || 20;

    // Only fetch puzzles if their suspended value is false
    const where = {
      suspended: false,
    };

    // Filter by user if 'source' is 'own' and user is authenticated, this is for displaying user's puzzles (not public puzzles on landing page)
    if (source === "own" && req.user) {
      where.user_id = req.user.id;
    }

    // Setting filtering conditions based on query parameters
    // if (min_rank) where.difficulty_rank = { [Op.gte]: min_rank };
    // if (max_rank)
    //   where.difficulty_rank = { ...where.difficulty_rank, [Op.lte]: max_rank };
    // if (difficulty) where.difficulty = difficulty;
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
        difficulty: puzzle.difficulty, // column name in DB is difficulty, not difficulty_rank anymore
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
        "difficulty",
        "description",
        "is_user_puzzle",
        "vote_count",
        "suspended",
        "createdAt",
        "updatedAt",
      ],
    });

    if (!puzzle) return res.status(404).json({ error: "Puzzle not found" });
    // Check if the puzzle is suspended
    if (puzzle.suspended)
      return res.status(404).json({ error: "Puzzle not found" });

    const formattedPuzzle = {
      // changed from puzzle_id: puzzle.id
      id: puzzle.id,
      sgf_data: puzzle.sgf_data,
      solution_coordinates: puzzle.solution_coordinates,
      category: puzzle.category,
      difficulty: puzzle.difficulty,
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

// Create a new puzzle then edit the thumbnail from the specific potential puzzle (defaults to no image thumbnail).
// We are not generating the thumbnail because we have a placeholder thumbnail already in the database
router.post("/", requireAuth, async (req, res) => {
  try {
    const sgfId = req.body.sgf_id;
    const boardSize = req.body.boardXSize;
    const moveNumber = req.body.move_number;

    // Get the specific potential puzzle that the user wants to save, since we have multiple puzzles with the same sgfId, we are differentiating those by the move_number property
    const potentialPuzzle = await PotentialPuzzle.findOne({
      where: {
        sgf_id: sgfId,
        move_number: moveNumber,
      },
    });

    console.log("potentialPuzzle, should be unique!", potentialPuzzle)

    if (!potentialPuzzle) {
      return res.status(404).send({ message: "Potential puzzle not found" });
    }

    // Create thumbnail for this puzzle
    const sgf2img = await python(
      path.join(
        __dirname,
        "..",
        "..",
        "..",
        "thumbnail_python_scripts",
        "sgf2img.py"
      )
    );
    const thumbnailBase64 = await sgf2img.generatePreview(
      potentialPuzzle.sgf_data,
      potentialPuzzle.move_number - 1
    );
    const uploadResponse = await cloudinary.uploader.upload(
      `data:image/png;base64,${thumbnailBase64}`
    );
    const thumbnailUrl = uploadResponse.url.replace("http://", "https://");

    // Transfer the potential puzzle data to the puzzles table
    const newPuzzle = await Puzzle.create({
      sgf_id: sgfId,
      sgf_data: potentialPuzzle.sgf_data,
      category: potentialPuzzle.category,
      move_number: potentialPuzzle.move_number,
      solution_coordinates: potentialPuzzle.solution_coordinates,
      difficulty: potentialPuzzle.difficulty,
      times_solved: 0, // Initialized to 0
      description: "", // Default to empty
      vote_count: 0, // Initialized to 0
      board_size: boardSize,
      is_user_puzzle: true,
      thumbnail: thumbnailUrl,
      suspended: false, // Puzzle is not suspended by default
    });

    return res.status(200).send({
      puzzle: newPuzzle,
    });
  } catch (err) {
    res.status(500).send({ message: `Error: ${err.message}` });
  }
});

// Edit a public puzzle (require isAdmin column on user's table to be true *** DO THIS LATER! ***)
router.put("/:puzzle_id", requireAuth, async (req, res) => {
  try {
    // Check authorization and find the puzzle record
    const puzzle = await Puzzle.findOne({
      where: { id: req.params.puzzle_id },
    });

    if (!puzzle) {
      return res.status(404).json({ error: "SGF not found!" });
    }

    // Initialize errors object
    let errors = {};

    // Fields we are going to edit (for now) -> add "solution coordinates" and "sgf_data" later
    const { category, difficulty, description } = req.body;

    const validCategories = [
      "Reading",
      "Judgment",
      "Direction",
      "Life and Death",
      "Capturing Race",
      "Ladder/Net",
      "Other",
    ];

    if (!validCategories.includes(category)) {
      errors.category = [
        "Invalid category, valid categories are: Reading, Judgment, Direction, Life and Death, Capturing Race, Ladder/Net, Other",
      ];
    }

    if (difficulty < 100 || difficulty > 5000) {
      errors.difficulty = ["Rank must be between 100 and 5000."];
    }

    if (/^\s*$/.test(description)) {
      errors.description = ["Description can't only be white spaces."];
    } else if (description.length > 100) {
      errors.description = ["Maximum description length is 100 characters."];
    }

    puzzle.category = category;
    puzzle.difficulty = difficulty;
    // Trim description before saving it to the database
    puzzle.description = description.trim();

    // Explicitly run Sequelize validation
    try {
      await puzzle.validate();
    } catch (err) {
      if (err.name && err.name === "SequelizeValidationError") {
        err.errors.forEach((error) => {
          if (!errors[error.path]) {
            errors[error.path] = [];
          }
        });
      }
    }

    // Filter out Sequelize errors if a custom error for the same field exists.
    Object.keys(errors).forEach((key) => {
      if (errors[key].length > 1) {
        errors[key] = errors[key].filter(
          (msg) => !msg.startsWith("Validation")
        );
      }
    });

    // Check if there are any errors
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        message: "Validation error",
        errors,
      });
    }

    // Save the record
    await puzzle.save();

    return res.status(200).json({
      puzzle_id: puzzle.id,
      category: puzzle.category,
      difficulty: puzzle.difficulty,
      description: puzzle.description,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while editing the puzzle" });
  }
});

// Delete a public puzzle (suspend it later)

router.delete("/:puzzle_id", requireAuth, async (req, res) => {
  try {
    // Find the specified puzzle by puzzle id in the url
    const puzzle = await Puzzle.findOne({
      where: { id: req.params.puzzle_id },
    });

    if (!puzzle) {
      return res.status(404).json({ message: "Puzzle couldn't be found" });
    }

    puzzle.suspended = true;
    await puzzle.save();

    return res.status(200).json({ message: "Successfully suspended Puzzle!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

// Updates user and puzzle rankings after a puzzle attempt
router.post("/:puzzle_id/ranking/update", requireAuth, async (req, res) => {
  // calculateNewElo function that we imported into this file gives an output like this: [1020, 1080] which represents the new player's elo, then the new puzzle's elo as an array
  try {
    const userId = req.user.id;
    const { puzzle_id } = req.params;
    const { userWin } = req.body;

    // Fetch the user and the puzzle from the database
    const user = await User.findByPk(userId);
    const puzzle = await Puzzle.findByPk(puzzle_id);

    const oldUserRank = user.rank;
    const oldPuzzleRank = puzzle.difficulty;

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
      where: { user_id: userId, puzzle_id: puzzle_id },
    });

    // If the userPuzzle exists and the completed column is set to true, then the user has already attempted the puzzle, and we do NOT want to update the ranking again
    if (userPuzzle && userPuzzle.completed) {
      return res.json({
        message:
          "Ranking for this puzzle has already been updated for this user.",
        oldUserRank: oldUserRank,
        oldPuzzleRank: oldPuzzleRank,
      });
    }

    // Calculate new ELO ratings
    const [newUserRank, newPuzzleRank] = calculateNewElo(
      user.rank,
      puzzle.difficulty,
      userWin
    );

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
        puzzle_id: puzzle_id,
        completed: true,
      });
    }

    // Update user's solved_puzzles count and puzzle's times_solved count
    const newUserSolvedPuzzlesCount = user.solved_puzzles + 1;
    const newPuzzleTimesSolvedCount = puzzle.times_solved + 1;

    user.solved_puzzles = newUserSolvedPuzzlesCount;
    puzzle.times_solved = newPuzzleTimesSolvedCount;

    // Save record to database
    await user.save();
    await puzzle.save();

    // Send updated rankings in response
    return res.status(200).json({
      oldUserRank: oldUserRank,
      oldPuzzleRank: oldPuzzleRank,
      newUserRank: newUserRank,
      newPuzzleRank: newPuzzleRank,
      newUserSolvedPuzzlesCount: newUserSolvedPuzzlesCount,
      newPuzzleTimesSolvedCount: newPuzzleTimesSolvedCount,
    });
  } catch (error) {
    // Error handling
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating rankings" });
  }
});

module.exports = router;
