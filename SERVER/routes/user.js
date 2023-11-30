const express = require('express')
const router = express.Router()
const {authentication} = require('../middlewares/authentication')
const Controller = require('../controllers/UserController')

router.post('/register',Controller.register)
router.post('/login',Controller.login)
router.use(authentication)
router.get('/:id',Controller.userFindById)
router.put('/:id',Controller.update)

module.exports = router