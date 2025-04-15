const express = require("express")
const productController = require("../controllers/productController")

const router = express.Router();

router.post("/create", productController.CreateFoodProduct)

router.put("/:id", productController.updateFoodProduct)

router.delete("/:id", productController.deleteFoodProduct)

module.exports = router