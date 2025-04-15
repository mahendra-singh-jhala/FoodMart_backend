const Food = require("../models/foodModel")

exports.CreateFoodProduct = async (req, res) => {
    const {title, description, price, food, discountedPrice, discountPersent, quantity, imageUrl} = req.body
    try {
        const foodProduct = Food({
            title,
            description,
            food,
            price,
            discountPersent,
            discountedPrice,
            quantity,
            imageUrl
        })

        await foodProduct.save()
        res.status(200).json({
            message: "Food Create Sucssesfully",
            foodProduct
        })
    } catch (error) {
        res.status(500).send({
            message: "Error: User login failed",
            error: error.message
        })
    }
}

exports.updateFoodProduct = async (req, res) => {
    try {
        const updateFoodProduct = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Food Updated Sucssesfully",
            updateFoodProduct
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error to updating Food'
        })
    }
}

exports.deleteFoodProduct = async (req, res) => {
    const foodId = req.params.id
    try {
        await Food.findByIdAndDelete(foodId)
        res.status(200).json({
            message: "Food delete Sucssesfully"
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error to deleting Food'
        })
    }
}