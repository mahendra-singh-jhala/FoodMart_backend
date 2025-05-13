const express = require("express")
const { signIn } = require("../middleware/authMiddleware")
const userController = require("../controllers/userController")

const router = express.Router()

// This route handles GET requests for get user by Id
router.get("/user", signIn, userController.getUserById)

module.exports = router