const mongoose = require("mongoose");

const chefSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    bio: {
        type: String,
        require: true
    },
    gender: {
        type: ["Male", "Female"],
        require: true
    },
    experience: {
        type: Number,
        require: true
    },
    specialties: {
        type: String,
        require: true
    },
    contact: {
        type: Number,
        require: true
    }

}, { timestamps: true})

const Chef = mongoose.model("Chef", chefSchema)

module.exports = Chef