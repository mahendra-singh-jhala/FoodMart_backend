const mongoose = require("mongoose")

const orderItemSchema = new mongoose.Schema({

}, { timestamps: true })

const orderItem = mongoose.model("orderItems", orderItemSchema)

module.exports = orderItem