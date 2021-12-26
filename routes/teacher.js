const express = require("express");
const Teacher = require("../models/teacher");
const cors=require("../cors.js");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.json(teacher);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const teacher = new Teacher({
    first_name: req.body.username,
    last_name: req.body.password,
    national_id_no: req.body.type,
    level:req.body.type,
    email:req.body.email,
    phone_no:req.body.email
  });

  try {
    const savedTeacher = await teacher.save();
    res.json(savedTeacher);
  } catch (err) {
    res.json({ message: err });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const removedTeacher = await Teacher.deleteOne({ _id: req.params.id });
    res.json(removedTeacher);
  } catch (err) {
    res.send({ message: err });
  }
});
router.patch("/:id", async (req, res) => {
  const updatedTeacher = await Teacher.updateOne(
    { _id: req.params.id },
    { $set: {cv_file_path:req.body.file_path} }
  );
});
module.exports = router;
