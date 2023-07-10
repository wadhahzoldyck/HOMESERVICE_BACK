const mongoose = require('mongoose');

const sous_serviceSchema = new mongoose.Schema({
    name:{
        type: 'String',
        required: true,
        min: 3,
        max: 255,
    },
    service:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Service', 
        required: true,
    },
    description:{
        type: 'String',
    },
    prix:{
        type:'String',
        required:true,
    },
    imageCard:{
        type:'String',
        required:true,
    },
    colorCard:{
        type:'String',
        required:true,
    },
})

module.exports = mongoose.model('Sous Service', sous_serviceSchema);