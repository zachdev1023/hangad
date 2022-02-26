const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ products });
});

const addProduct = asyncHandler(async (req, res) => {
  const {text} = req.body

  if (!text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const product = await Product.create({
    text,
  });

  res.status(200).json(product);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found.");
  }

  await product.remove();

  res.status(200).json({ id: req.params.id });
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found.");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProduct);
});

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct,
};
