const mongoose = require("mongoose")

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB Connected Successfully")
    } catch (error) {
        console.log("MongoDB Not Connected", error)
    }
}

module.exports = connectdb