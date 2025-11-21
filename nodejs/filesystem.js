import fs from "fs";

//write operation
// fs.writeFileSync("demo.txt", "hello world");
// fs.writeFileSync("demo.txt", "hiii");

// fs.writeFile("vikas.pdf", "vikas ki class ", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file created ");
// });

//read operation
// const data = fs.readFileSync("demo.txt", "utf-8");
fs.readFile("vikas.pdf", "utf-8", (err, data) => {
  if (err) {
    console.log(`something went wrong ${err}`);
  }
  console.log("data fetched successfully and the data is" + data);
//   console.log(data);
});
// console.log(data);
//append operation
// fs.appendFileSync("demo.txt", "\n how are you");
//deletion
// fs.unlinkSync("demo.txt");
