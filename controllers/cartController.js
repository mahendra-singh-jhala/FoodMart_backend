const Cart = require("../models/cartModel")
const CartItems = require("../models/cartItem")

exports.findUserCart = async (req, res) => {
    const userId = req.user._id
    try {
        const cart = await Cart.findOne({user: userId})
        if (!cart) {
            res.status(400).json({
                message: "Cart Not found"
            })
        }


        res.status(200).json({
            message: "User Cart find successfully",
            cart
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}


exports.addCartItem = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

exports.updateCartItem = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}


exports.removeCartItem = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}