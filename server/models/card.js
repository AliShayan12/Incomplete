const mongoose = require('mongoose')


const cardSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    description: {
        type: String, required: true, unique: true
    },
    link: {
        type: String
    },
    price: {
        type: String
    }

})


module.exports = mongoose.model('Card', cardSchema)