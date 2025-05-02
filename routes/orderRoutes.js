const express = require("express")
const orderController = require("../controllers/orderController")
const { signIn } = require("../middleware/authMiddleware")
const router = express.Router()


router.post("/", signIn, orderController.createOrder)

router.get("/userOrder", signIn, orderController.usersOrder)

router.get("/:id", signIn, orderController.findOrderById)

module.exports = router