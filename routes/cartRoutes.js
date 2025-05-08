const express = require("express")
const cartController = require("../controllers/cartController")
const { signIn } = require("../middleware/authMiddleware")
const router = express.Router();

// This route handles GET requests for find user cart
router.get("/", signIn, cartController.findUserCart)

// This route handles PUT requests for cart item
router.put("/add", signIn, cartController.addCartItem)

// This route handles PUT requests for update cartItem
router.put("/:id", cartController.updateCartItem)

// This route handles DELETE requests for remove cart item
router.delete("/:id", cartController.removeCartItem)

module.exports = router