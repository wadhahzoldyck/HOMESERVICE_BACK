const router = require("express").Router();
const Sous_Service = require("../models/Sous_service");

const getSous_Services = async (req, res) => {
  const S_service = await Sous_Service.find().populate("service", "name");
  if (!S_service) return res.status(400).json("Sous service not found");
  return res.status(200).json(S_service);
};

const getSous_ServiceById = async (req, res) => {
  const S_service = await Sous_Service.findById(req.params.id);
  if (!S_service) return res.status(400).json("Sous service not found");
  return res.status(200).json(S_service);
};

const updateSous_Service = async (req, res) => {
  await Sous_Service.findOneAndUpdate({ _id: req.params.id }, req.body).then(
    (updatedSous_Service) => {
      if (updatedSous_Service)
        return res.status(200).json("Sous service updated successfully");
      return res.status(400).json("error");
    }
  );
};

const deleteSous_Service = async (req, res) => {
  await Sous_Service.findOneAndDelete({ _id: req.params.id }).then(
    (updatedSous_Service) => {
      if (updatedSous_Service)
        return res.status(200).json("Sous service deleted successfully");
      return res.status(400).json("error");
    }
  );
};
const SearchSousService = async (req, res) => {
  let result = await Sous_Service.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
      {
        prix: { $regex: req.params.key },
      },
    ],
  });
  res.send(result);
};

module.exports = {
  getSous_Services,
  getSous_ServiceById,
  updateSous_Service,
  deleteSous_Service,
  SearchSousService,
};
