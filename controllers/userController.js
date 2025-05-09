const User = require("../models/userModel")

// Controller function for get user by ID
exports.getUserById = async (req, res) => {
    const userId = req.user._id
    try {
        const user = await User.findById(userId)
        .populate('addresses')  
        .exec();
        if(!user) {
            return res.status(404).json({
                message: "User Not FOund"
            })
        }

        res.status(200).json({
            message: "User get successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error please try again",
            error: error.message
        })
    }
}