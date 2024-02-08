const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const { APP_PASSWORD, GMAIL_ACCOUNT } = require("../../private");

//Sending Connect form:
//@route  | api/connect

router.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    check("email", "email is required").isEmail(),
    check("message", "message is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log("TESTING 1");
    //pulling out inputs
    const { name, email, address, message } = req.body;

    const formData = {};

    if (name) formData.name = name;
    if (email) formData.email = email;
    if (address) formData.address = address;
    if (message) formData.message = message;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: GMAIL_ACCOUNT,
          pass: APP_PASSWORD,
        },
      });

      console.log("TESTING 2");

      const mailOptions = {
        from: email,
        to: ["cuadrosda21@gmail.com", "diego@crystalclearsolutions.co"],
        subject: `MESSAGE FROM WEBSITE VISITOR: ${name}`,
        html: `<h3>Address: ${address}</h3>
                <p> Name: ${name} </p>
                <p>Message: ${message}</p>`,
      };

      console.log("TESTING 3");

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("THERE IS AN ERROR:", error);
        } else {
          console.log("Email sent: ", info.response);
          res.json({ msg: "Email Sent!!" });
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
