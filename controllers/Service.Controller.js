const router = require("express").Router();
const Service = require("../models/Service");

const getServices = async (req, res) => {
  const service = await Service.find();
  if (!service) return res.status(400).json("service not found");
  return res.status(200).json(service);
};

const getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) return res.status(400).json("service not found");
  return res.status(200).json(service);
};

const updateService = async (req, res) => {
  await Service.findOneAndUpdate({ _id: req.params.id }, req.body).then(
    (updatedService) => {
      if (updatedService)
        return res.status(200).json("service updated successfully");
      return res.status(400).json("error");
    }
  );
};

const deleteService = async (req, res) => {
  await Service.findOneAndDelete({ _id: req.params.id }).then(
    (updatedService) => {
      if (updatedService)
        return res.status(200).json("service deleted successfully");
      return res.status(400).json("error");
    }
  );
};
const SearchService = async (req, res) => {
  let result = await Service.find({
    $or: [
      {
        name: { $regex: req.params.key },
      },
    ],
  });
  res.send(result);
};

module.exports = { getServices, getServiceById, updateService, deleteService,SearchService };
