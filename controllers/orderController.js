const Address = require("../models/addressModel")
const Cart = require("../models/cartModel")
const CartItem = require("../models/cartItem")
const OrderItem = require("../models/orderItem")
const order = require("../models/orderModel")
const Order = require("../models/orderModel")

exports.createOrder = async (req, res) => {
    const userId = req.user._id
    const user = req.user
    const { firstname, lastname, city, state, streetAddress, zipCode, phoneNumber } = req.body

    try {
        let address = new Address({
            firstname,
            lastname,
            city,
            state,
            address: streetAddress,
            zipCode,
            phoneNumber
        })

        address.user = user;
        await address.save()

        user.addresses.push(address);
        await user.save();

        const cart = await Cart.findOne({ user: userId })
        const cartItems = await CartItem.find({ cart: cart.id }).populate("food")

        const orderItems = [];
        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalDiscount = 0;
        let totalItem = 0;

        for(const item of cartItems) {
            totalItem += item.quantity;
            const orderItem = new OrderItem({
                price: item.price,
                food: item.food,
                quantity: item.quantity,
                size: item.size,
                userId: item.userId,
                discountedPrice: item.discountedPrice
            })

            const createOrderItem = await orderItem.save();
            orderItems.push(createOrderItem)

            totalPrice += item.price;
            totalDiscountedPrice += item.discountedPrice;
            totalDiscount += (item.price - item.discountedPrice);
        }

        const createOrder = new Order({
            user,
            orderItems,
            totalPrice: totalPrice,
            totalDiscountedPrice: totalDiscountedPrice,
            discount: totalDiscount,
            totalItem: totalItem       
        })

        const saveOrder = await createOrder.save();
        res.status(201).json({
            message: "order Created Successfully",
            saveOrder
        })

    } catch (error) {
        res.status(500).json({
            message: 'Internal server error. Please try again later',
            error: error.message
        })
    }


}

// exports.usersOrder = async (req, res) => {

// }

// exports.findOrderById = async (req, res) => {

// }



