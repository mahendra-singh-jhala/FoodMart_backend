const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Cart = require("../models/cartModel")

// Loard enviornment variable
require("dotenv").config()

// Controller function for user registration
exports.register = async (req, res) => {
    const { username, firstname, lastname, email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                message: "User email already exists"
            });
        }

        // hash password
        const hashPassword = await bcrypt.hash(password, 10)
        // register user
        const newUser = new User({
            username,
            firstname,
            lastname,
            email,
            password: hashPassword
        })
        await newUser.save();

        const cart = new Cart({
            user: newUser._id
        })

        await cart.save();
        // Respond with success message
        res.status(200).json({
            message: "User registered successfully",
            user: newUser
        })
    } catch (error) {
        res.status(500).send({
            message: "Error: User registered failed",
            error: error.message
        })
    }
}

// Controller function for user login
exports.login = async (req, res) => {
    const {  email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                message: "Email Not found"
            })
        }

        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(400).json({
                message: "Password Not Match"
            })
        }

        const token = jwt.sign({ userId: user._id, email: user.email}, process.env.SECRET_KEY, { expiresIn: "7D" })
        res.status(200).json({
            message: "Login Successfully",
            user,
            token
        })
    } catch (error) {
        res.status(500).send({
            message: "Error: User login failed",
            error: error.message
        })
    }
}