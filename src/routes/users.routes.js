const router = require('express').Router()

const userController = require("../controllers/users.controllers")

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put("/:id", userController.updatedUser);
router.delete("/:id", userController.deleteUser);

module.exports = router