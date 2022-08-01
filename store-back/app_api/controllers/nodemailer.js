const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "smtp@gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "perecotyPoleOnlineStore@gmail.com",
    pass: "kgdqgqerwilqlgnw",
  },
});
const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log(`Email sent success: `, info);
  });
};

module.exports = mailer;
