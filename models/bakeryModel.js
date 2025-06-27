const mongoose = require("mongoose")

const createBakerySchema = new mongoose.Schema({
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

    bakeryImage: {
        type: String,
        required: true
    },

    BakeryOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    openingHours: {
        type: String,
        default: "24 hour"
    },

    bakeryProduct: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BakeryProduct",
        required: true
    }]
})

const Bakery = mongoose.model("Bakery", createBakerySchema)

module.exports = Bakery