const express = require("express")
const fitnesRouter = express.Router()
const FitnesController = require("../controllers/FitnesController")

fitnesRouter.get("/bmi", FitnesController.getBmi)
// required token

module.exports = fitnesRouter