const Food = require("../models/foodModel")

// Controller function for create product
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
            message: "Error: To Create FoodProduct",
            error: error.message
        })
    }
}

exports.getAllProduct = async (req, res) => {
    try {
        const foodProduct = await Food.find();

        res.status(200).json({
            message: "Food Product Find Successfully",
            foodProduct
        })
    } catch(error) {
        res.status(500).json({
            message: 'Error to finding Food Product'
        })
    }
}

exports.findProductById = async (req, res) => {
    const productId = req.params.id
    try {
        const foodProduct = await Food.findById(productId)
        if (!foodProduct) {
            return res.status(400).json({
                message: "FoodProduct Not Found"
            })
        }

        res.status(200).json({
            message: "Food Product Find Successfully",
            foodProduct
        })

    } catch (error) {
        res.status(500).json({
            message: 'Error to finding Food Product By Id'
        })
    }
}

// Controller function for update product
exports.updateFoodProduct = async (req, res) => {
    try {
        const updateFoodProduct = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            message: "Food Updated Sucssesfully",
            updateFoodProduct
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error to updating Food Product'
        })
    }
}

// Controller function for delete product
exports.deleteFoodProduct = async (req, res) => {
    const foodId = req.params.id
    try {
        await Food.findByIdAndDelete(foodId)
        res.status(200).json({
            message: "Food delete Sucssesfully"
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error to deleting Food Product'
        })
    }
}