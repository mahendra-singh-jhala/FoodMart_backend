const express = require("express")
const orderController = require("../controllers/orderController")
const { signIn } = require("../middleware/authMiddleware")
const router = express.Router()

// This route handles POST requests for create order
router.post("/", signIn, orderController.createOrder)

// This route handles GET requests for get user order
router.get("/", signIn, orderController.usersOrder)

// This route handles GET requests for get order by Id
router.get("/:id", signIn, orderController.findOrderById)

module.exports = router