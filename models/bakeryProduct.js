const mongoose = require("mongoose")

const bakeryProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    Item: {
        type: String,
        required: true,
        enum: ["bread", "cake", "cookie", "pastry", "other"]
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

    available: {
        type: Boolean,
        default: true
    },

    imageUrl: {
        type: String
    },

    bakery: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bakery"
    }

}, { timestamps: true })

const BakeryProduct = mongoose.model("BakeryProduct", bakeryProductSchema)

module.exports = BakeryProduct