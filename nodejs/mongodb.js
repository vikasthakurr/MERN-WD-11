import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();
// console.log(process.env.PORT);

// const PORT = 3000;
const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

app.post("/register", async (req, res) => {
  try {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, age, email, password: hashedPassword });
    const savedUser = await user.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (err) {
    return res.json({ message: "something went wrong" });
  }
});
app.get("/userList", async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(400).json({ message: "something went wrong" });
  res.status(200).json(users);
});

app.put("/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) return res.status(404).json({ error: "user not found" });
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: "user not found" });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
