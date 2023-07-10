const {
  getServices,
  getServiceById,
  updateService,
  deleteService,
  SearchService,
} = require("../controllers/Service.Controller");
const {
  addDemandeService,
  getDemandeServices,
  getProfessDemandesById,
  getDemandeServicesPublic,
  getDemandeServicesPrive,
  updateDemandeService,
  updateDemandeServicePrive,
  getClientDemandesById,
} = require("../controllers/DemandeService.Controller");
const { SearchSousService } = require("../controllers/Sous_serviceController");
const Sous_Service = require("../controllers/Sous_serviceController");
const { VideoCall } = require("../controllers/VideoCall");
const {
  CreateEvent,
  GetEvent,
  Delete,
} = require("../controllers/CalendarController");
const {
  addPPA,
} = require("../controllers/ProfessionnelPublicAcceptaController");
const auth = require("../middlewares/auth");

const router = require("express").Router();

// Service Routers

router.get("/services", getServices);
router.get("/search/:key", SearchService);
router.get("/searchS/:key", SearchSousService);

//Video Call Routers

router.get("/video-call/:id", VideoCall);

//Calendar Controller

router.post("/create-event/:id", CreateEvent);
router.get("/get-event/:id", GetEvent);
router.delete("/:id/delete", Delete);

// sous service Routers
router.get("/sous_service", Sous_Service.getSous_Services);

// DemandeService Routers

router.post("/NewRequest", addDemandeService);
router.get("/AllDemandesPublic", getDemandeServicesPublic);
router.get("/AllDemandesPrive", getDemandeServicesPrive);
router.get("/ProfessionnelPriveDemandes:id", getProfessDemandesById);
router.get("/ClientsDemandes:id",auth, getClientDemandesById);
router.post("/UpdateDemandeService/:id", updateDemandeService);
router.post("/UpdateDemandeServicePrive/:id", updateDemandeServicePrive);

module.exports = router;
