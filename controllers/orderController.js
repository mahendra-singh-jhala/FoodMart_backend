const Address = require("../models/addressModel")
const Cart = require("../models/cartModel")
const CartItem = require("../models/cartItem")
const OrderItem = require("../models/orderItem")
const Order = require("../models/orderModel")

// Controller function for create order
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

// Controller function for find user order
exports.usersOrder = async (req, res) => {
    const userId = req.user.id;
    try {
        const orders = await Order.find({ user: userId}).populate({  path: "orderItems", populate: { path: "food" } }).lean()
        if(!orders ) {
            return res.status(404).json({
                message: "No order found"
            })
        }

        res.status(200).json({
            message: "Orders fetched successfully",
            orders
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error. Please try again Later',
            error: error.message
        })
    }
}

// Controller function for find order by ID
exports.findOrderById = async (req, res) => {
    const orderId = req.params.id;
    try {
        const order = await Order.findById(orderId)
            .populate("user")
            .populate({  path: "orderItems", populate: { path: "food" } }).lean()
            .populate("shippingAddress")
        
        if(!order) {
            return res.status(404).json({
                message: "No order found"
            })
        }

        res.status(200).json({
            message: "Order fetched successfully",
            order
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error. Please try again Later',
            error: error.message
        })
    }
}



