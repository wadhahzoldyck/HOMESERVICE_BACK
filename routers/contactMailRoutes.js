const { Router } = require("express");
const route = Router();
const ContactMail = require("../controllers/ContacMail");
const MailAcceptation = require("../controllers/MailAcceptation")

route.post("/api/auth/contactus", ContactMail.sendMail);
route.post("/api/auth/AcceptationOrRefuse",MailAcceptation.sendMail );

module.exports = route;
