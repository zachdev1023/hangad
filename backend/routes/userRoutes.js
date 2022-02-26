const express = require('express')
const router = express.Router()
const {getUsers, addUser, deleteUser, updateUser, loginUser} = require("../controllers/userController")

router.route('/login').post(loginUser)
router.route('/').get(getUsers).post(addUser)
router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router;