const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({

}, { timestamps: true })

const Order = mongoose.model("Orders", orderSchema)

module.exports = Order