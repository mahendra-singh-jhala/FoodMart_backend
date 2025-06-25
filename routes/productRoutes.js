const express = require("express")
const productController = require("../controllers/productController")
const { signIn, rolesBasedAccess } = require("../middleware/authMiddleware")

const router = express.Router();

// This route handles GET requests for get all products
router.get("/", productController.getAllProduct)

// This route handles GET requests for get product by Id
router.get("/id/:id", signIn, productController.findProductById)

// This route handles POST requests for create product
router.post("/create", signIn, rolesBasedAccess("admin"),  productController.CreateFoodProduct)

// This route handles PUT requests for update product
router.put("/:id", signIn, rolesBasedAccess("admin"), productController.updateFoodProduct)

// This route handles DELETE requests for delete product
router.delete("/:id", signIn, rolesBasedAccess("admin"), productController.deleteFoodProduct)

module.exports = router