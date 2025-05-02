const Cart = require("../models/cartModel")
const CartItems = require("../models/cartItem")
const FoodProduct = require("../models/foodModel")

exports.findUserCart = async (req, res) => {
    const userId = req.user._id
    try {
        const cart = await Cart.findOne({ user: userId })
        if (!cart) {
            res.status(400).json({
                message: "Cart Not found"
            })
        }
        let cartItems = await CartItems.find({ cart: cart._id }).populate("food")
        cart.cartItem = cartItems

        let totalPrice = 0
        let totalDiscountedPrice = 0
        let totalItem = 0

        for (let cartItem of cart.cartItem) {
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice
            totalItem += cartItem.quantity
        }

        cart.totalPrice = totalPrice
        cart.totalItem = totalItem
        cart.totalDiscountPrice = totalDiscountedPrice
        cart.discount = totalPrice - totalDiscountedPrice

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
    const userId = req.user._id;
    const { foodProductId } = req.body
    try {
        const cart = await Cart.findOne({ user: userId })
        if (!cart) {
            res.status(400).json({
                message: "Cart Not found"
            })
        }

        const foodProduct = await FoodProduct.findById(foodProductId)
        if (!foodProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        const isPresent = await CartItems.findOne({ cart: cart._id, food: foodProductId })
        if (isPresent) {
            isPresent.quantity += 1;
            await isPresent.save();
            return res.status(200).json({
                message: "Item quantity updated successfully",
                cartItem: isPresent
            });
        } else {
            const cartItem = new CartItems({
                cart: cart._id,
                food: foodProductId,
                quantity: 1,
                price: foodProduct.price,
                discountedPrice: foodProduct.discountedPrice,
                userId
            })

            const createCartItem = await cartItem.save()
            cart.cartItem.push(createCartItem)

            await cart.save();
            res.status(200).json({
                message: "CartItem added successfully",
                cartItem: createCartItem
            });
        }

    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

exports.updateCartItem = async (req, res) => {
    const { quantity } = req.body;
    const foodProductId = req.params.id
    try {
        const cartItem = await CartItems.findByIdAndUpdate(foodProductId, { quantity: quantity}, {new: true}).populate("food")
        if (!cartItem) {
            return res.status(404).json({
                message: "CartItem not found"
            });
        }

        let price = cartItem?.food?.price;
        let discountedPrice = cartItem?.food?.discountedPrice

        price = cartItem.quantity * price
        discountedPrice = cartItem.quantity * discountedPrice

        cartItem.price = price
        cartItem.discountedPrice = discountedPrice

        await cartItem.save();
        res.status(200).json({
            message: "Cart item updated successfully",
            updatedCartItem: cartItem
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}


exports.removeCartItem = async (req, res) => {
    const cartItemId = req.params.id
    try {
        await CartItems.findByIdAndDelete(cartItemId)
        res.status(200).json({
            message: "CartItem removed successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}