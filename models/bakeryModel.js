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
        ref: "bakeryProduct",
        required: true
    }],

    bakeryImage: {
        type: String,
        required: true
    }
})

const Bakery = mongoose.model("bakery", bakeryModel)

module.exports = Bakery