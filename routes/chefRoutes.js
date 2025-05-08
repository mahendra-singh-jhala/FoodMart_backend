const express = require("express")
const chefController = require("../controllers/chefController")

const router = express.Router();

// This route handles UPDATE chef Profile
router.put("/updateProfile", chefController.updateProfile)