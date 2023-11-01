const moment = require("moment");
const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { User, Quiz, UserQuizResult } = require("../../db/models");

const router = express.Router();

// Function to convert score to percentage
function convertToPercentage(score, totalQuestions) {
  return Math.round((score / totalQuestions) * 100);
}

// Grading function for quizId 1 ("Basic Rules")
function gradeQuizBasicRules(answers) {
  const correctAnswers = {
    question1: "answerA",
    question2: "answerC",
    question3: "answerB"
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

// Grading function for quizId 2 ("Advanced Rules")
function gradeQuizAdvancedRules(answers) {
  const correctAnswers = {
    question1: "answerD",
    question2: "answerB",
    question3: "answerA"
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

    let score = (quizId === "1") ? gradeQuizBasicRules(userAnswers) : gradeQuizAdvancedRules(userAnswers);

    // Check if an entry for this user and quiz already exists
    const existingEntry = await UserQuizResult.findOne({
      where: {
        user_id: userId,
        quiz_id: quizId
      }
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
        score: score
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


module.exports = router;
