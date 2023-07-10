const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name:{
        type: 'String',
        required: true,
        min: 3,
        max: 255,
    },
    description:{
        type: 'String',
    },
    icon:{
        type: 'String',
        required: true,
        min: 3,
        max: 255,
    },
    imageCouverture:{
      type: 'String'
    },
    imageCard:{
        type:'String',
        required:true,
    },
    cardColor:{
        type: 'String',
        required: 'true',
        min: 3,
        max: 255,
    }
})

module.exports = mongoose.model('Service', serviceSchema);