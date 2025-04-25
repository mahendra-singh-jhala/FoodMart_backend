const Address = require("../models/addressModel")


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



