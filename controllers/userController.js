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
                message: "User Not Found"
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

exports.userProfileUpdate = async (req, res) => {
    const { username, firstname, lastname, email } = req.body
    const userId = req.body.userId

    const updateData = { username, firstname, lastname, email }
    try {
            const updateProfile = User.findByIdAndUpdate(userId, updateData, {new: true})
    
            if(!updateProfile) {
                return res.status(404).json({
                    message: "User Not Found"
                })
            }
    
            res.status(200).json({
                message: "User Profile Update Successfully",
                updateProfile
            })
        } catch (error) {
            res.status(500).json({
                message: "Internal Server error"
            })
        }
}