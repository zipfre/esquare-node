const express = require("express");
const User = require("../models/user");
const Student = require("../models/student");
const Teacher = require("../models/teacher");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/teacher", async (req, res) => {
  try {
    const { user_name, user_password } = req.body;
    const password = await bcrypt.hash(user_password, 5);

    const user = new User({
      user_name: user_name,
      user_password: password,
      type: "teacher",
    });
    const savedUser = await user.save();
    //res.json(savedUser);
    const teacher = new Teacher({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      national_id_no: req.body.national_id_no,
      level: req.body.level,
      email: req.body.email,
      phone_no: req.body.phone_no,
    });

    try {
      const savedTeacher = await teacher.save();
      //res.json(savedStudent);
    } catch (err) {
      res.json({ message: err });
    }
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/student", async (req, res) => {
  // console.log(req.body);
  const { user_name, user_password } = req.body;
  const password = await bcrypt.hash(user_password, 5);
  try {
    console.log(user_name);
    const user = new User({
      user_name: user_name,
      user_password: password,
      type: "student",
    });
    const savedUser = await user.save();
    //res.json(savedUser);
    const student = new Student({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
      level: req.body.level,
      parent_name: req.body.parent_name,
      parent_id_no: req.body.parent_id_no,
      parent_phone_no: req.body.parent_phone_no,
      parent_email: req.body.parent_email,
    });

    try {
      const savedStudent = await student.save();
      res.json({message:"Student Created Successfully"});
    } catch (err) {
      console.json({ message: err });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
