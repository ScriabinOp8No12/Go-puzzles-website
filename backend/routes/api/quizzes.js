const moment = require("moment");
const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { User, Quiz, UserQuizResult } = require("../../db/models");

const router = express.Router();

// Function to convert score to percentage
function convertToPercentage(score, totalQuestions) {
  return Math.round((score / totalQuestions) * 100);
}

// ****** Hard coded answers for Quiz id of 1 (BASIC RULES) ********************* //
function gradeQuizBasicRules(answers) {
  const correctAnswers = {
    question1: "false",
    question2: "false",
    question3: "true",
    question4: "true",
    question5: "black",
    question6: "question6-atari2",
    question7: "3",
    question8: "8",
    question9: "40",
    question10: "2",
  };

  let score = 0;
  const totalQuestions = Object.keys(correctAnswers).length;

  for (const [question, answer] of Object.entries(answers)) {
    if (correctAnswers[question] === answer) {
      score++;
    }
  }

  return convertToPercentage(score, totalQuestions);
}

// ****** Hard coded answers for Quiz id of 2 (ADVANCED RULES) ********************* //
function gradeQuizAdvancedRules(answers) {
  const correctAnswers = {
    question1: "answerD",
    question2: "answerB",
    question3: "answerA",
  };

  let score = 0;
  const totalQuestions = Object.keys(correctAnswers).length;

  for (const [question, answer] of Object.entries(answers)) {
    if (correctAnswers[question] === answer) {
      score++;
    }
  }

  return convertToPercentage(score, totalQuestions);
}

router.post("/:quiz_id/submit", requireAuth, async (req, res) => {
  try {
    const userId = req.user.id;
    const quizId = req.params.quiz_id;
    const userAnswers = req.body.answers;

    let score =
      quizId === "1"
        ? gradeQuizBasicRules(userAnswers)
        : gradeQuizAdvancedRules(userAnswers);

    // Check if an entry for this user and quiz already exists
    const existingEntry = await UserQuizResult.findOne({
      where: {
        user_id: userId,
        quiz_id: quizId,
      },
    });

    if (existingEntry) {
      // Update the existing entry if it exists
      existingEntry.score = score;
      await existingEntry.save();
    } else {
      // Otherwise create a new entry
      await UserQuizResult.create({
        user_id: userId,
        quiz_id: quizId,
        score: score,
      });
    }

    // Refresh to get all fields, including timestamps
    await existingEntry.reload();

    // Format timestamps with Moment.js
    const formattedEntry = {
      ...existingEntry.toJSON(),
      createdAt: moment(existingEntry.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      updatedAt: moment(existingEntry.updatedAt).format("YYYY-MM-DD HH:mm:ss"),
    };

    res.json(formattedEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Check if the user has attempted the quiz or not, so we can render "show answer" buttons if the user has attempted the quiz already
router.get("/:quiz_id/hasAttempted", requireAuth, async (req, res) => {
  const userId = req.user.id;
  const quizId = req.params.quiz_id;

  try {
    // Check if the user has an entry for this quiz
    const hasAttempted = await UserQuizResult.findOne({
      where: {
        user_id: userId,
        quiz_id: quizId,
      },
    });

    // If an entry exists, send back a confirmation
    if (hasAttempted) {
      return res.json({ hasAttempted: true });
    } else {
      // If not, inform the client that the quiz has not been attempted
      return res.json({ hasAttempted: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
