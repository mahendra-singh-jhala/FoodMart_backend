const Product = require("../models/productModel")

exports.CreateProduct = async (req, res) => {
    const {title, description, price, food, discountedPrice, discountPersent, quantity, imageUrl} = req.body
    try {
        const product = Product({
            title,
            description,
            food,
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

exports.updateProduct = async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Product Updated Sucssesfully",
            updateProduct
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error to updating Product'
        })
    }
}

exports.deleteProduct = async (req, res) => {
    const productId = req.params.id
    try {
        await Product.findByIdAndDelete(productId)
        res.status(200).json({
            message: "Product delete Sucssesfully"
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error to deleting Product'
        })
    }
}