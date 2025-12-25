import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const sendMail = async ({ to, subject, text }) => {
  //transporter setup
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vikaskumar20012001@gmail.com",
      pass: process.env.PASSWORD, // Make sure to set PASS in your .env file
    },
  });

  const mailOptions = {
    from: "vikaskumar20012001@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("email sent: " + info.response);
  } catch (error) {
    console.log("error sending email:", error);
  }
};

export default sendMail;