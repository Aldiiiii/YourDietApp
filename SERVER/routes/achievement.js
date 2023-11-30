const express = require('express')
const router = express.Router()
const Controller = require('../controllers/AchievementController')

router.get('/',Controller.getAchievement)
router.post('/',Controller.setAchievement)

module.exports = router;