const express = require("express")
const bakeryController = require("../controllers/bakeryController")
const { signIn, isBakery } = require("../middleware/authMiddleware")

const router = express.Router();

// This route handles POST requests for create bakery
router.post("/", signIn, bakeryController.createBakery)

// This route handles Get requests for get bakery by Id
router.put("/:id", signIn, bakeryController.getBakeryById)

// This route handles PUT requests for get bakery update
router.put("/updateBakery", signIn, bakeryController.updateBakery)

// This route handles GET requests for find bakery
router.get("/", signIn, bakeryController.getBakery)

module.exports = router