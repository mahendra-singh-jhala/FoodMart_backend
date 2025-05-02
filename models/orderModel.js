const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems",
        required: true
    }],
    orderDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    deliveryDate: {
        type: Date
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    paymentDetails: {
        paymentId: {
            type: String
        },
        paymentStatus: {
            type: String
        }
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalDiscountedPrice: {
        type: Number,
        required: true
    },

    discount: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        default: "PENDING",
        required: true
    },

    totalItem: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Order = mongoose.model("Orders", orderSchema)

module.exports = Order