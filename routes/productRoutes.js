const express = require("express")
const productController = require("../controllers/productController")

const router = express.Router();

router.post("/create", productController.CreateProduct)

router.put("/:id", productController.updateProduct)

router.delete("/:id", productController.deleteProduct)

module.exports = router