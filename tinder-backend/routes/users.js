const express = require("express");
const router = express.Router();
const dbCards = require("../models/dbCards");

// Get all the users
router.get("/", async (req, res) => {
  try {
    const users = await dbCards.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// Add a new user
router.post("/", async (req, res) => {
  const user = new dbCards({
    name: req.body.name,
    imgUrl: req.body.imgUrl,
    team: req.body.team,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
