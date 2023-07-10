const router = require('express').Router();
const DemandeServicePrive = require('../models/DemandeServicePrive')
const DemandeService = require('../models/DemandeService');
const { isObjectIdOrHexString } = require('mongoose');


const addDemandeService = async (req, res) => {
    const typeD = req.body.typeD;
    const service = req.body.service;
    const serviceName = req.body.serviceName;
    const professionnel = req.body.professionnel;
    const description = req.body.descService;
    const when = req.body.quand;
    const client = req.body.client;
    const phone = req.body.numtel;
    let demande = {}
    if (typeD === "prive") {
        demande = new DemandeServicePrive({
            TypeD: typeD,
            Service: service,
            ServiceName: serviceName,
            Professionnel: professionnel._id,
            Description: description,
            When: when,
            Client: client,
            Phone: phone
        })
    }
    else {
        demande = new DemandeService({
            TypeD: typeD,
            Service: service,
            ServiceName: serviceName,
            Professionnel: null,
            Description: description,
            When: when,
            Client: client,
            Phone: phone
        })
    }

    await demande.save().then(() => {
        res.status(200).json("Demande envoyé")
    })

}

const getDemandeServicesPublic = async (req, res) => {
    const Dservice = await DemandeService.find().populate("Client")
    if (!Dservice) return res.status(400).json('Demande service not found')
    return res.status(200).json(Dservice)

}

const getDemandeServicesPrive = async (req, res) => {
    const Dservice = await DemandeServicePrive.find().populate("Client")
    if (!Dservice) return res.status(400).json('Demande service not found')
    return res.status(200).json(Dservice)

}

// const getDemandeOnlineMeeting = async (req, res) => {
//     const Dservice = await DemandeService.find().populate("Client")
//     if (!Dservice) return res.status(400).json('Demande service not found')
//     return res.status(200).json(Dservice)

// }

const getProfessDemandesById = async (req, res) => {
    const Dservice = await DemandeServicePrive.find({ Professionnel: req.params.id }).populate("Client")
    if (!Dservice) return res.status(400).json('Demande service not found')
    return res.status(200).json(Dservice)

}

const getClientDemandesById = async (req, res) => {
    console.log(req.params.id)
    const DserviceP = await DemandeServicePrive.find({ Client: req.params.id }).populate("Professionnel")
    if (!DserviceP) return res.status(400).json('Demande service not found')
    return res.status(200).json(DserviceP)

}

const getDemandeServiceById = async (req, res) => {
    console.log(req.params.id);
    const Dservice = await DemandeService.find({ Professionnel: req.params.id })
    if (!Dservice) return res.status(400).json('Demande service not found')
    return res.status(200).json(Dservice)
}


const updateDemandeService = async (req, res) => {
    await DemandeService.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((updatedDemandeService) => {
            if (updatedDemandeService) return res.status(200).json('Demande service updated successfully')
            return res.status(400).json('error')
        })

}

const updateDemandeServicePrive = async (req, res) => {
    await DemandeServicePrive.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((updatedDemandeServicePrive) => {
            if (updatedDemandeServicePrive) return res.status(200).json('Demande service updated successfully')
            return res.status(400).json('error')
        })

}

const deleteDemandeService = async (req, res) => {
    await DemandeService.findOneAndDelete({ _id: req.params.id })
        .then((updatedDemandeService) => {
            if (updatedDemandeService) return res.status(200).json('Demande service deleted successfully')
            return res.status(400).json('error')
        })

}

module.exports = { addDemandeService, getDemandeServicesPublic, getDemandeServicesPrive, getProfessDemandesById, getClientDemandesById, getDemandeServiceById, updateDemandeService, updateDemandeServicePrive, deleteDemandeService }