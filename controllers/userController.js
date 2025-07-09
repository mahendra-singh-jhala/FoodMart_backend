const User = require("../models/userModel")
const multer = require("multer")
const path = require("path")
const fs = require("fs")

// Controller function for get user by ID
exports.getUserById = async (req, res) => {
    const userId = req.user.userId
    try {
        const user = await User.findById(userId)
            .populate('addresses')
            .exec();
        if (!user) {
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

const uploadDir = path.join(__dirname, "Profileupload")
if(!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

// controller function for update profile
exports.userProfileUpdate = async (req, res) => {
    const { username, firstname, lastname, email } = req.body
    const userId = req.user.userId

    const profilePicture = (req.files && req.files['profilePicture']) ? req.files['profilePicture'].map(file => `/Profileupload/${file.filename}`) : [];

    const updateData = { username, firstname, lastname, email, profilePicture }

    try {
        const updateProfile = await User.findByIdAndUpdate(userId, updateData, { new: true })
        if (!updateProfile) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }
        
        res.status(200).json({
            message: "User Profile Update Successfully",
            user: updateProfile
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}

exports.upload = upload.fields([{ name: 'profilePicture', maxCount: 10 }])