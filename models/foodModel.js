const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    food: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    discountedPrice: {
        type: Number,
        required: true
    },

    discountPersent: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    imageUrl: {
        type: String
    },
    
}, { timestamps: true})

const Food = mongoose.model("Foods", foodSchema)

module.exports = Food