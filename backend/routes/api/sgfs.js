const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { User, Puzzle, UserPuzzle } = require("../../db/models");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");

const router = express.Router();

//
//

module.exports = router;
