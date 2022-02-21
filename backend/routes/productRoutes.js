const express = require('express')
const router = express.Router()
const {getProducts, addProduct, deleteProduct, updateProduct} = require("../controllers/productsController")

router.route('/').get(getProducts).post(addProduct)
router.route('/:id').put(updateProduct).delete(deleteProduct)

module.exports = router;