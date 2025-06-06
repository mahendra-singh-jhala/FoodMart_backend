const mongoose = require("mongoose")

const bakeryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    bakeryProduct: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BakeryProduct",
        required: true
    }],

    bakeryImage: {
        type: String,
        required: true
    }
})

const Bakery = mongoose.model("Bakery", bakeryModel)

module.exports = Bakery