import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const PORT = 3000;
const app = express();
app.use(express.json());
//mongo connection

mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:Vikas123@cluster0.pw7ceyi.mongodb.net/vikas"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

//schema

const UserSchema = new mongoose.Schema({
  username:{
    type:String,
    require:true
  },
  password: String,
});

//model
const User = mongoose.model("User", UserSchema);

//create

app.post("/register", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    const savedUser = await newUser.save();
    if (!savedUser)
      return res.status(404).json({ message: "something went wrong" });
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

//read

app.get("/allusers", async (req, res) => {
  try {
    const users = await User.find();
    if (!users)
      return res.status(400).json({ message: "something went wrong" });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

//update

app.put("/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ err: "user not found" });
    res.status(200).json({ message: "user updated " });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

//delete

app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "something went wrong" });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
app.get("/", (req, res) => {
  res.end("hii from server");
});

app.listen(PORT, () => {
  console.log("server started");
});
