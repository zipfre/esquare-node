const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

require("dotenv/config");

const userRoute = require("./routes/users.js");
const registerRoute = require("./routes/register.js");
const paymentRoute = require("./routes/payment.js");
const studentRoute = require("./routes/student.js");
const user = require("./models/user.js");
const teacherRoute = require("./routes/teacher.js");
const fileRouter=require("./routes/files.js")
const student = require("./models/student.js");
const JWT_SECRET = "!@$124!!wtr23$#^15lkslkflka1lk3jl15lksdflka";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use("/users", userRoute);
app.use("/register", registerRoute);
app.use("/payment", paymentRoute);
app.use("/teacher", teacherRoute);
app.use("/student", studentRoute);
app.use("/files",fileRouter);

app.post("/login", async (req, res) => {
  const { user_name, password } = req.body;
  try {
    found_user = await user.findOne({ user_name: user_name }).lean();
    if (!found_user) {
      return res.json({ message: "Invalid username or password" });
    }
    if (await bcrypt.compare(password, found_user.user_password)) {
      const token = jwt.sign(
        { id: user._id, user_name: user.user_name },
        JWT_SECRET,
        {expiresIn:86400}
      );
      return res.json({ data: token, type: found_user.type });
    }

    return res.json({ message: "Invalid username or password" });
  } catch (err) {
    console.log(err);
  }
});

mongoose.connect(process.env.DB_CONNECTION, (err) => {
  if (!err) {
    console.log("DB connected...");
  } else {
    console.log(err);
  }
});
app.listen(3000);
