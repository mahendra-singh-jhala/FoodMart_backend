const mongoose = require("mongoose")

const AddressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    zipCode: {
        type: Number,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

const Addresses = mongoose.model("Addresses", AddressSchema)

module.exports = Addresses

