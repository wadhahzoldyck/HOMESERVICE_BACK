const mongoose = require('mongoose')

const DemandeServiceSchema = new mongoose.Schema({
    TypeD: {
        type: 'String',
        required: true,
    },
    Service: {
        type: 'String',
        required: true,
    },
    ServiceName: {
        type: 'String',
        required: true
    },
    Professionnel: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Professionel', 
        default: null
    },
    Description: {
        type: 'String',
        required: true,
        maxlength: 1000
    },
    When: {
        type: 'String',
        required: true
    },
    Client: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User', 
        required: true,
    },
    Phone: {
        type: 'String',
        required: true
    },
    acceptedFromAdmin:{
        type: Boolean,
        default:true,
    },
    acceptedFromProf:{
        type: Boolean,
        default:false,
    },
    date:{
        type:Date,
        default: Date.now
    }

})

module.exports = mongoose.model('DemandeService', DemandeServiceSchema)