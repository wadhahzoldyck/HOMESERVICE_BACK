const mongoose = require('mongoose')

const ProfessionnelPublicAcceptationSchema = new mongoose.Schema({
    Professionnel: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Professionel', 
        required: true,
    },
    Client: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User', 
        required: true,
    },
    acceptedFromAdmin:{
        type: Boolean,
        default:true,
    },
    acceptedFromClient:{
        type: Boolean,
        default:false,
    },
})

module.exports = mongoose.model('ProfessionnelPublicAcceptation', ProfessionnelPublicAcceptationSchema)