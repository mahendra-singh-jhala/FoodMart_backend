const mongoose = require("mongoose");

const chefSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    gender: {
        type: ["Male", "Female"],
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    specialties: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    }

}, { timestamps: true})

const Chef = mongoose.model("Chef", chefSchema)

module.exports = Chef