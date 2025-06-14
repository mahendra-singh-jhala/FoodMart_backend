const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signIn = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "Authorization header is missing"
        });
    }

    const token = authHeader.split(" ")[1]
    if (!token) {
        return res.status(401).json({
            message: "Token is missing"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const userId = decoded.userId;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid token",
            error: error.message
        });
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.role !== "admin") {
            return res.status(401).send("Unauthorized");
        }
        next();
    } catch (error) {
        res.status(401).json({ 
            message: "Invalid token", 
            error: error.message 
        });
    }
};

export const isChef = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.role !== "chef") {
            return res.status(401).send("Unauthorized");
        }
        next();
    } catch (error) {
        res.status(401).json({ 
            message: "Invalid token", 
            error: error.message 
        });
    }
};

export const isBakery = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.role !== "bakery") {
            return res.status(401).send("Unauthorized");
        }
        next();
    } catch (error) {
        res.status(401).json({ 
            message: "Invalid token", 
            error: error.message 
        });
    }
};
