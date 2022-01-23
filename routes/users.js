const express = require("express");
const User = require("../models/user");
const Student = require("../models/student");
const Teacher = require("../models/teacher");
const cors = require("../cors.js");
const router = express.Router();
const app=express();
const jwt = require("jsonwebtoken");

//app.use(cors());
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
  if ((type = "student")) {
    const student = new Student({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
      level: req.body.level,
      parent_name: req.body.parent_name,
      parent_id_no: req.body.parent_id_no,
      parent_phone_no: req.body.parent_phone,
      parent_email: req.body.parent_email,
    });

    try {
      const savedStudent = await student.save();
      console.log(savedStudent);
    } catch (err) {
      console.log({ message: err });
    }
  } else if ((type = "teacher")) {
    const teacher = new Teacher({
      first_name: req.body.username,
      last_name: req.body.password,
      national_id_no: req.body.type,
      level: req.body.type,
      email: req.body.email,
      phone_no: req.body.email,
    });
    try {
      const savedTeacher = await teacher.save();
      console.log("Saved Teacher");
    } catch (err) {
      console.log({ message: err });
    }
  }

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
    { $set: { user_password: req.body.password } }
  );
});
module.exports = router;
