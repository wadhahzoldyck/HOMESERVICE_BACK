const {Router}  = require('express');
const route = Router();
const Sous_Service = require('../controllers/Sous_serviceController');

route.get('/sous_service',Sous_Service.getSous_Services)


module.exports = route ;