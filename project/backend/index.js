import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Authcontroller from "./controllers/Authcontroller.js";
import OrderController from "./controllers/OrderController.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

//auth controller

app.use("/api/auth", Authcontroller);
app.use("/api/orders", OrderController);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
