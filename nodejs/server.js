// export default function fetchData(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       console.log("api called ");
//     });
// }

// import http from "http";
// import fs from "fs";

// const PORT = 3000;

// //instance of server
// const server = http.createServer((req, res) => {
//   //   console.log(req.url);
//   //   console.log(req.method);
//   //   console.log(req.headers);
//   //   console.log(req.body);
//   //   console.log(res);
//   //   res.setHeader("lekhak", "vikas thakur");
//   //   res.setHeader("type", "plain/text");
//   //   res.statusCode = 201;
//   //   res.end("hii from server");
//   if (req.url == "/home" && req.method == "GET") {
//     // res.end("welcome to home page");
//     fs.readFile("./Home.html", (err, data) => {
//       if (err) {
//         res.end("error loading page");
//       }
//       res.statusCode = 200;
//       res.setHeader("content-type", "application/html");
//       res.end(data);
//     });
//   }
//   if (req.url == "/about") {
//     res.end("welcome to about us page");
//   }
// });

// server.listen(PORT, () => {
//   console.log(`server started at port ${PORT}`);
// });

import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
// console.log(server);
const PORT = 3000;
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "view"));

server.get("/contact", (req, res) => {
  //   res.render("contact.ejs");
  res.render("contact");
});
server.listen(PORT, () => {
  console.log("server started");
});
