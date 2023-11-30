const express = require(`express`);
const router = express.Router();
const userRoute = require("./user");
const foodRoute = require("./food");
const openAiRouter = require("./openAi");
const achievementRouter = require("./achievement");
const historyRouter = require("./history");
const {authentication} = require("../middlewares/authentication");
const menuRouter = require("./menu");
const fitnesRouter = require("./fitnes");

router.use("/users", userRoute);

router.use(authentication)



router.use('/achievements',achievementRouter)

router.use("/foods", foodRoute);
router.use("/openai", openAiRouter)
router.use("/histories", historyRouter)
router.use("/menus", menuRouter)
router.use("/fitnes", fitnesRouter)

module.exports = router;
