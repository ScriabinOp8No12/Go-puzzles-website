const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { User, Puzzle } = require("../../db/models");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");

const router = express.Router();

// Get all SGFs of the current user (format like go4go.net)
// remember this is in the sgfs route, so the complete url would be:
// /sgfs/users/:user_id
router.get("/users/:user_id", requireAuth, async (req, res) => {});
module.exports = router;
