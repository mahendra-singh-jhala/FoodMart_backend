const express = require("express")
const bakeryController = require("../controllers/bakeryController")
const { signIn } = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/", signIn, bakeryController.createBakery)

router.get("/", signIn, bakeryController.getBakery)

module.exports = router