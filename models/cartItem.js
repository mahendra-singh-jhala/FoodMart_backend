const mongoose = require("mongoose")

const CartItemSchema = new mongoose.Schema({
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
        require: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        require: true
    },
    quantity: {
        type: Number,
        require: true,
        default: 1
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    discountedPrice: {
        type: Number,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    }

}, { timestamps: true })

const CartItems = mongoose.model("CartItems", CartItemSchema)

module.exports = CartItems