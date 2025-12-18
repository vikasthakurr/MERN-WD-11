//REST
//layered system
//stateless
//cacheable
//code on demand
//client server behave

import express from "express";
import fs from "fs";
const PORT = 3000;

const api = express();

api.get("/", (req, res) => {
  res.status(200).json({ message: "hii from home page" });
});

api.get("/product", (req, res) => {
  fs.readFile("./products.json", (err, data) => {
    if (err) {
      res.status(400).json({ error: "something went wrong" });
    }
    res.status(200).send(data);
  });
});
api.post("/login", (req, res) => {
  res.status(201).json({ message: "new user added successfully" });
});
api.listen(PORT, () => {
  console.log("server started");
});
