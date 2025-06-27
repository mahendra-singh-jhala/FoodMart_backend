const Bakery = require("../models/bakeryModel");
const BakeryProduct = require("../models/bakeryProduct");

// Controller function for create bakery
exports.createBakery = async (req, res) => {
    const { name, email, address, phone, openingHours, bakeryImage } = req.body
    try {
        const bakery = new Bakery({
            name,
            email,
            address,
            phone,
            openingHours,
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

// Controller function for update product
exports.updateBakery = async (req, res) => {
    try {
        const updateBakery = await Bakery.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Bakery Updated Sucssesfully",
            updateBakery
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error to update bakery'
        })
    }
}
 
// Controller function for get bakery
exports.getBakery = async (req, res) => {
    try {
        const bakery = await Bakery.find()

        res.status(200).json({
            message: "bakery get Successfully",
            bakery
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}