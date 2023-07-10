const { Router } = require("express");
const route = Router();
const professionnelController = require("../controllers/professionnelController");
const auth = require("../middlewares/auth");

route.post("/api/auth/registerp", professionnelController.register);
route.post("/api/auth/activationp", professionnelController.activate);
route.post("/api/auth/loginp", professionnelController.signing);
route.post("/api/auth/accessp", professionnelController.access);
route.post("/api/auth/forgot_passp", professionnelController.forgot);
route.get(
  "/api/auth/professionnelsByDomaine:domaine",
  professionnelController.findProfessionnelByDomain
);
route.post("/api/auth/reset_passp", auth, professionnelController.reset);
route.get("/api/auth/professionnel", auth, professionnelController.info);
route.patch(
  "/api/auth/professionnel_update",
  auth,
  professionnelController.update
);
route.get("/api/auth/signout", professionnelController.signout);
route.get("/profesionnel/search/:key", professionnelController.SearchService);
// route.post('/api/auth/google_signing', userController.google);

module.exports = route;
