const router = require('express').Router()

const userController = require("../controllers/users.controllers")

router.get('/', userController.getAllUsers)
router.post('/', userController.createUser)

module.exports = router