import express from "express";
import mongoose from "mongoose";

const PORT = 3000;
const app = express();

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

app.get("/", (req, res) => {
  res.end("hii from server");
});

app.listen(PORT, () => {
  console.log("server started");
});
