const express = require("express")
const { signIn, rolesBasedAccess } = require("../middleware/authMiddleware")
const userController = require("../controllers/userController")

const router = express.Router()

// This route handles GET requests for get user by Id
router.get("/", signIn, rolesBasedAccess("user"), userController.getUserById)

// This route handles PUT requests for update user
router.put("/profileUpdate", signIn, rolesBasedAccess("user"), userController.upload, userController.userProfileUpdate)


module.exports = router