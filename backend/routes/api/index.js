const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const sgfsRouter = require("./sgfs.js");
const puzzlesRouter = require("./puzzles.js");
const potentialPuzzlesRouter = require("./potential_puzzles.js")
const userPuzzlesRouter = require("./user_puzzles.js")
const quizzesRouter = require("./quizzes.js")

const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/sgfs", sgfsRouter);
router.use("/public_puzzles", puzzlesRouter);
router.use("/potential_puzzles", potentialPuzzlesRouter)
router.use("/user_puzzles", userPuzzlesRouter)
router.use("/quizzes", quizzesRouter)

module.exports = router;
