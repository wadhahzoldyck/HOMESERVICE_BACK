const PPAC = require('../models/ProfessionnelPublicAcceptation')

const addPPA = async (req, res) => {
    const professionnel = req.body.Professionnel;
    const client = req.body.Client;
   
       const demande = new PPAC({
            Professionnel: professionnel,
            Client: client
        })

    await demande.save().then(() => {
        res.status(200).json("PPA ajouté")
    })

}

module.exports = { addPPA }