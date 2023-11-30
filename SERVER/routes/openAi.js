const express = require(`express`);
const { getMenu, countCalorie } = require("../controllers/OpenAiController");
const openAiRouter = express.Router();

openAiRouter.get("/menu", getMenu) 
// require token
// openAiRouter.get("/calorie/:food", countCalorie) // ga pake

module.exports = openAiRouter