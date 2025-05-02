const express = require("express")
const orderController = require("../controllers/orderController")
const { signIn } = require("../middleware/authMiddleware")
const router = express.Router()


router.post("/", signIn, orderController.createOrder)

router.get("/user", orderController.usersOrder)

router.get("/:id", orderController.findOrderById)

module.exports = router