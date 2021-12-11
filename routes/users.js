const express = require("express");
const User = require("../models/user");
const cors=require("../cors.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    user_name: req.body.username,
    user_password: req.body.password,
    type: req.body.type,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.id });
    res.json(removedUser);
  } catch (err) {
    res.send({ message: err });
  }
});
router.patch("/:id", async (req, res) => {
  const updatedPost = await User.updateOne(
    { _id: req.params.id },
    { $set: {user_password:req.body.password} }
  );
});
module.exports = router;
