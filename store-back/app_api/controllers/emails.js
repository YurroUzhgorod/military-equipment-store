var mailer = require("./nodemailer");

module.exports.sendConfirmOrderEmail = function (req) {
  var message = {
    from: "perecoty-pole online store",
    to: req.body.email,
    subject: "perecoty-pole store",
    text: `Вітаємо, Ви зробили замовлення на нашому сайті на суму: ${req.body.totalPrice} гривень

    Деталі вашого замовлення:
      
      Номер Вашого замовлення: ${req.body.orderId}
      Імя: ${req.body.name}
      Фамілія: ${req.body.secondName}
      Номер телефону: ${req.body.phone}
      Емейл: ${req.body.email}
      Спосіб Доставки: ${req.body.deliveryWay}
      Спосіб оплати: ${req.body.paymentWay}
      Коментар: ${req.body.orderComment}

    Очікуйте на дзвінок від нашого менеджера!`,
  };

  mailer(message);
};

module.exports.sendCallBackIfoMessage = function (req) {
  var message = {
    from: "Call back request",
    to: "perecotyPoleOnlineStore@gmail.com",
    subject: "perecoty-pole store",
    text: `
Заявка на зворотній дзвінок:
      Імя: ${req.body.name}
      Номер телефону: ${req.body.phone}`,
  };

  mailer(message);
};
