const express = require("express")
const historyRouter = express.Router();
const HistoryController = require("../controllers/HistoryController")

// historyRouter.get("/all", HistoryController.findAll) 
// g usah dulu
historyRouter.get("/now", HistoryController.findCurrent)
// required token


module.exports = historyRouter