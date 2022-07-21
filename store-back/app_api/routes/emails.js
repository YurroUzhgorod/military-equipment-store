var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "janessa13@ethereal.email",
    pass: "8PmKMXsBWQSYZN9UuH",
  },
});
const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log(`Email sent success: `, info);
  });
};

router.post("/", function (req, res) {
  const message = {
    from: "Mailer Test <janessa13@ethereal.email>",
    to: req.body.orderDetails.email,
    subject: "",
    text: `Вітаємо, ви успішно зареєстувались на сайті
    
    
    Імя: ${req.body.orderDetails.name}
    Фамілія: ${req.body.orderDetails.secondName}
    Номер телефону: ${req.body.orderDetails.phone}
    Емейл: ${req.body.orderDetails.email}
    Спосіб Доставки: ${req.orderDetails.deliveryWay}
    Спосіб оплати: ${req.orderDetails.paymentWay}
    Коментар: ${req.orderDetails.orderComment}
    `,
  };
  mailer(message);
  res.send(
    `Реєстрація пройшла успішно. дані обліковго запису відправлені на емейл: ${req.body.orderDetails.email}`
  );
});

module.exports = router;
