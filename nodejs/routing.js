import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  //   res.status(200).send("welcome to home page");
  res.status(201).json({ name: "vikas", age: 23 });
});

//home route

app.get("/home", (req, res) => {
  res.status(200).send("welcome to home page");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  res.status(200).json({ username, password });
});
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
