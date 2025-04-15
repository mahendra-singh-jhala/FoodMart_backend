const Chef = require("../models/chefModel")

exports.updateProfile = async (req, res) => {
    const { bio, gender, experience, specialties, contact } = req.body
    const userId = req.body.userId

    const updateData = {
        bio, 
        gender, 
        experience, 
        specialties, 
        contact
    }
    try {
        const updateProfile = Chef.findByIdAndUpdate(userId, updateData, {new: true})

        if(!updateProfile) {
            return res.status(404).json({
                message: "user Not Found"
            })
        }

        res.status(200).json({
            message: "Chef Profile Update Successfully",
            updateProfile
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error"
        })
    }
}