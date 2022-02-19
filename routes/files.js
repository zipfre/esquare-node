const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/studymaterials/:folderName", async (req, res) => {
  const folderName=req.params['folderName'];
  console.log(req.params);
  fs.readdir("./files/"+folderName, (err, files) => {
    res.json({ data: files,folder:folderName});
  });
});


router.get("/listfiles/:folderPath&:folder",async(req,res) =>{
const folderPath=req.params.folderPath;
const folder=req.params.folder;
console.log(folderPath,folder);
fs.readdir("./files/"+folderPath+'/'+ folder,(err,files) => {
  res.json({data:files});
});
});

module.exports = router;
