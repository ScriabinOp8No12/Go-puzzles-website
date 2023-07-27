// CHANGE ALL ROUTES B/C WE WON'T USE FIRSTNAME AND LASTNAME!!!!!

const express = require("express");

const bcrypt = require("bcryptjs");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Puzzle, Sgf } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more.")
    .isAlphanumeric()
    .withMessage(
      "Password can only contain alphanumeric characters, no spaces allowed!"
    ),
  handleValidationErrors,
];

// Sign up
router.post("/", validateSignup, async (req, res) => {
  // REMOVING first and last name here from the req.body and in the .create method below
  const { email, password, username } = req.body;
  const hashedPassword = bcrypt.hashSync(password);
  const user = await User.create({
    // REMOVED first and last name here too!
    email,
    username,
    hashedPassword,
  });

  const safeUser = {
    id: user.id,
    // REMOVED first and last name to POST request
    email: user.email,
    username: user.username,
  };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser,
  });
});

module.exports = router;
