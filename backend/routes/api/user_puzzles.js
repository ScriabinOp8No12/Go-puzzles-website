const moment = require("moment");
const express = require("express");
const { requireAuth } = require("../../utils/auth");
const { Sgf, PotentialPuzzle, Puzzle, UserPuzzle } = require("../../db/models");
const router = express.Router();


router.get("/", requireAuth, async(req, res) => {
  //
})


module.exports = router;
