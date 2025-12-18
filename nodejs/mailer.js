import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hii from server");
});

//transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vikasskumar20012001@gmail.com",
    pass: "password",
  },
});

const mailOptions = {
  from: "vikassskumar20012001@gmail.com",
  to: "god07skill@gmail.com",
  subject: "test mail",
  text: "hii this is test email",
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("email sent");
});
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});