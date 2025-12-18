import express from "express";

const PORT = 3000;

const app = express();
app.use(express.json());

//middleware

// app.use((req, res, next) => {
//   // console.log("middleware called");
//   //   let username = "vikas";
//   //   let password = "vikas123";
//   if (req.body.username == "" || req.body.password == "") {
//     console.log("middleware1 called");

//     res.status(401).send("its not allowed");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   if (req.body.username != "vikas" || req.body.password != "vikas123") {
//     console.log("middleware2 called");
//     req.user = { name: "vikas", age: 23 };
//     res.status(401).send("its not authorized");
//   }
//   next();
// });

app.use((req, res, next) => {
  console.log("middleware called");
  req.user = { name: "vikas", age: 25, role: "admin" };
  next();
});
app.get("/", (req, res) => {
  res.send("welcome to home page");
  //   res.send(req.user);
  console.log(
    `welcome ${req.user.name} and your age is ${req.user.age} and your are ${req.user.role}`
  );
});

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   //   const age = req.body.age;
//   //   console.log(age);
//   res.send(req.user);
//   res.status(200).json({ username, password });
// });
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
