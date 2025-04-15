const express = require("express")
const chefController = require("../controllers/chefController")

const router = express.Router();

router.put("/updateProfile", chefController.updateProfile)