const mongoose = require("mongoose");

const chefSchema = new mongoose.Schema({
    name: {
        type: String,
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

}, { timestamps: true})

const Chef = mongoose.model("Chef", chefSchema)

module.exports = Chef