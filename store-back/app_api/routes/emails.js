var express = require("express");
var router = express.Router();

const emailsController = require("../controllers/emails");

router.post("/checkout", emailsController.sendConfirmOrderEmail);

router.post("/callback", emailsController.sendCallBackIfoMessage);

module.exports = router;
