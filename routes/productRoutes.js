const express = require("express")
const productController = require("../controllers/productController")
const { signIn } = require("../middleware/authMiddleware")

const router = express.Router();

// This route handles GET requests for get all products
router.get("/", productController.getAllProduct)

// This route handles GET requests for get product by Id
router.get("/id/:id", signIn, productController.findProductById)

// This route handles POST requests for create product
router.post("/create", productController.CreateFoodProduct)

// This route handles PUT requests for update product
router.put("/:id", productController.updateFoodProduct)

// This route handles DELETE requests for delete product
router.delete("/:id", productController.deleteFoodProduct)

module.exports = router