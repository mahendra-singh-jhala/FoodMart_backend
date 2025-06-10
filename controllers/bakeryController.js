const Bakery = require("../models/bakeryModel");
const BakeryProduct = require("../models/bakeryProduct");

// Controller function for create bakery
exports.createBakery = async (res, req) => {
    const { name, description, bakeryImage } = req.body
    try {
        const bakery = new Bakery({
            name,
            description,
            bakeryImage
        })
        await bakery.save();

        const bakeryProduct = new BakeryProduct({
            bakery: bakery._id
        })
        await bakeryProduct.save();

        res.status(200).json({
            message: "Successfully create a bakery",
            bakery,
            bakeryProduct
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

// Controller function for get bakery
exports.getBakery = async (res, req) => {
    try {
        const bakery = await Bakery.find()

        res.status(200).json({
            message: "Successfully get bakery",
            bakery
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}