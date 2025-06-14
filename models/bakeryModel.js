const mongoose = require("mongoose")

const bakeryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    openingHours: {
        type: String,
        default: "24 hour"
    },

    bakeryImage: {
        type: String,
        required: true
    },

    bakeryProduct: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BakeryProduct",
        required: true
    }]
})

const Bakery = mongoose.model("Bakery", bakeryModel)

module.exports = Bakery