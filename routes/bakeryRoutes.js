const express = require("express")
const bakeryController = require("../controllers/bakeryController")
const { signIn } = require("../middleware/authMiddleware")

const router = express.Router();

// This route handles POST requests for create bakery
router.post("/", signIn, bakeryController.createBakery)

// This route handles GET requests for find bakery
router.get("/", signIn, bakeryController.getBakery)

module.exports = router