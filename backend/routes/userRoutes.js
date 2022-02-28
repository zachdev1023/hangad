const express = require('express')
const router = express.Router()
const { viewProfile, getUsers, addUser, deleteUser, updateUser, loginUser} = require("../controllers/userController")

const {protect} = require('../middleware/authMiddleware')

router.route('/login').post(loginUser)
router.route('/profile').get(protect, viewProfile)
router.route('/').get(getUsers).post(addUser)
router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router;