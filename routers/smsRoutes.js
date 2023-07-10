const { Router } = require("express");
const route = Router();
const sendsms = require("../controllers/smsController");


route.get("/api/auth/sms:m/:s/:n/:ln", sendsms.sendSms);

module.exports = route;