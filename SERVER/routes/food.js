const express = require("express");
const router = express.Router();
const Controller = require("../controllers/FoodController");
router.get("/", Controller.filterFoods);
// required token
// query filter = string
router.post("/:historyId", Controller.inputFood)
// required token
// required food = string
module.exports = router;
