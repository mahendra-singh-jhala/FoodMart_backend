const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
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

const Product = mongoose.model("Products", productSchema)

module.exports = Product