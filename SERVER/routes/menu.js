const express = require("express")
const menuRouter = express.Router()
const MenuController = require("../controllers/MenuController")
const authenticationMenu = require("../middlewares/authenticationMenu")

menuRouter.get("/:historyId", authenticationMenu, MenuController.getMenu)
// require token
menuRouter.post("/:historyId", authenticationMenu, MenuController.createMenu)
// require token
// requrie breakfast string, breakfastCalorie number, lunch string , lunchCalorie number dll
menuRouter.patch("/:historyId", authenticationMenu, MenuController.eatMenu)
// requrie eaten : string, calorie : number

module.exports = menuRouter