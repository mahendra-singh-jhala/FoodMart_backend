const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    cartItem: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CartItems",
        require: true
    }],
    totalPrice: {
        type: Number,
        require: true,
        default: 0
    },
    totalItem: {
        type: Number,
        require: true,
        default: 0
    },
    totalDiscountPrice: {
        type: Number,
        require: true,
        default: 0
    },
    discount: {
        type: Number,
        require: true,
        default: 0
    }
}, { timestamps: true })

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart