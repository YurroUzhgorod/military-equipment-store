const UsersModel = require("../models/users");
const { prepareToken } = require("../utils/token");
var mailer = require("./nodemailer");

// const sendJSONResponse = (res, status, content) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.status(status).json(content);
// };

module.exports.signup = function (req, res) {
  var user = new UsersModel({
    email: req.body.email,
    name: req.body.name,
  });
  if (req.body.secretKey === process.env.SECRET_KEY_FOR_ADMIN_STATUS)
    user.isAdmin = true;
  else user.isAdmin = false;

  if (!req.body.name || req.body.name.length < 2 || req.body.name.length > 20)
    return res.status(500).json({
      error:
        "Помилка вводу імені .Довжина імені повинна бути від 2 до 10 символів",
    });
  if (
    !req.body.email ||
    req.body.email.length < 2 ||
    req.body.email.length > 20
  )
    return res.status(500).json({
      error:
        "Помилка вводу адреси електронної пошти. Довжина адреси повинна бути від 2 до 10 символів",
    });

  if (!req.body.email.includes("@"))
    return res.status(500).json({
      error: "Помилка вводу.В назві адреси потрібно вказати символ -  @",
    });

  if (req.body.password) user.setPassword(req.body.password);
  else
    return res.status(500).json({
      error: "пароль обовязковий",
    });

  user
    .save()
    .then((user) => {
      const token = prepareToken(
        {
          id: user._id,
          name: user.name,
        },
        req.headers
      );
      return res.status(201).json({
        result: "Успіх.Користувач зареєструвався",
        token,
      });
    })
    .then(() => {
      var message = {
        from: "perecoty-pole online store",
        to: req.body.email,
        subject: "perecoty-pole store",
        text: `Вітаємо, Ви зареєстувались на нашому сайті.
  
      Ваші реєстраційні дані:
        
        Імя: ${req.body.name}
        Емейл: ${req.body.email}
        Пароль: ${req.body.password}`,
      };
      mailer(message);
    })
    .catch((err) => {
      return res.status(500).json({ error: "Помилка реєстрації" });
    });
};
module.exports.login = function (req, res) {
  if (!req.body.email) {
    return res.status(401).json({ error: "Емейл обовязковий" });
  }
  if (!req.body.password) {
    return res.status(401).json({ error: "Пароль обовязковий" });
  }
  UsersModel.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Користувач не знайдений" });
      }
      if (!user.validPassword(req.body.password)) {
        return res.status(401).json({ error: "помилка паролю" });
      }
      const token = prepareToken(
        {
          id: user._id,
          name: user.name,
        },
        req.headers
      );
      const expiresAt = new Date().getTime() + 36000000;

      const isUserAdmin = user.isAdmin;
      res.status(200).json({
        result: "Authorized",
        user: {
          authData: {
            name: user._doc.name,
            access_token: token,
          },
          expiresAt,
          isUserAdmin,
        },
      });
    })
    .catch((err) => {
      return res.status(401).json({ error: "Login error" });
    });
};
