const mongoose = require("mongoose")

const bakeryProductModel = new mongoose.Schema({
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

    bakery: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bakery",
        required: ture
    }
}, { timestamps: true })

const BakeryProduct = mongoose.model("BakeryProduct", bakeryProductModel)

module.exports = BakeryProduct