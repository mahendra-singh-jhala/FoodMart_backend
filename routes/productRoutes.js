const express = require("express")
const productController = require("../controllers/productController")

const router = express.Router();

// This route handles POST requests for create product
router.post("/create", productController.CreateFoodProduct)

// This route handles PUT requests for update product
router.put("/:id", productController.updateFoodProduct)

// This route handles DELETE requests for delete product
router.delete("/:id", productController.deleteFoodProduct)

module.exports = router