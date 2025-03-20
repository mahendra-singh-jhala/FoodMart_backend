const Product = require("../models/productModel")

exports.CreateProduct = async (req, res) => {
    const {title, description, price, discountedPrice, discountPersent, quantity, imageUrl} = req.body

    try {
        const product = Product({
            title,
            description,
            price,
            discountPersent,
            discountedPrice,
            quantity,
            imageUrl
        })

        await product.save()
        res.status(200).json({
            message: "Product Create Sucssesfully",
            product
        })
    } catch (error) {
        res.status(500).send({
            message: "Error: User login failed",
            error: error.message
        })
    }
}