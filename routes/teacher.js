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
router.patch("/",async (req,res)=> {
  try{
    const updatedTeacher = await Teacher.updateOne(
      { _id: req.body.teacher_id },
      {
        $set: { section:req.body.teacher_section}
      }
    );
    console.log(updatedTeacher);
    res.json({message:"Successfully assgined class"});
  }
  catch(err)
  {
    res.json({message:err});
  }
});
router.post("/", async (req, res) => {
  const teacher = new Teacher({
    user_name:req.body.user_name,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    national_id_no: req.body.national_id_no,
    level:req.body.level,
    email:req.body.email,
    phone_no:req.body.phone_no
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
    { $set: {section:teacher_section} }
  );
});
module.exports = router;
