const express = require("express")
const bakeryController = require("../controllers/bakeryController")
const { signIn, isBakery } = require("../middleware/authMiddleware")

const router = express.Router();

// This route handles POST requests for create bakery
router.post("/", signIn, bakeryController.createBakery)

// // This route handles POST requests for get bakery by Id
// router.get("/", signIn, bakeryController.getBakeryById)

// This route handles GET requests for find bakery
router.get("/", signIn, bakeryController.getBakery)

module.exports = router