const express = require("express")
const cartController = require("../controllers/cartController")
const router = express.Router();

router.get("/", cartController.findUserCart)

router.put("/add", cartController.addCartItem)

router.put("/:id", cartController.updateCartItem)

router.delete("/:id", cartController.removeCartItem)

module.exports = router