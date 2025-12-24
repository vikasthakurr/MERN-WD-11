import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../Schema/User.js";
import { error } from "console";
dotenv.config();

const Authcontroller = express();

// Register
Authcontroller.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//login

Authcontroller.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "user not found" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: "invalid password" });
    res.status(200).json({ message: "welcome to home page", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//update route

export default Authcontroller;
