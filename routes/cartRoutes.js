const express = require("express")
const cartController = require("../controllers/cartController")
const { signIn } = require("../middleware/authMiddleware")
const router = express.Router();

router.get("/", signIn, cartController.findUserCart)

router.put("/add", signIn, cartController.addCartItem)

router.put("/:id", cartController.updateCartItem)

router.delete("/:id", cartController.removeCartItem)

module.exports = router