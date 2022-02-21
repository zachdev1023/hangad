const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: "Get Products",
  });
})

const addProduct = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: "New Product",
  });
})

const deleteProduct = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: `Product ${req.params.id} Deleted`,
  });
})

const updateProduct = asyncHandler(async(req, res) => {
  res.status(200).json({
    message: `Product ${req.params.id} Updated`,
  });
})

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};
