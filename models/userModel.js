const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['user', 'chef', 'bakery', 'admin'],
        default: 'user'
    },

    addresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Addresses"
    }],

    paymentInfo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment_Info"
    }],

    profilePicture: { 
        type: [String], 
        default: [] 
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User