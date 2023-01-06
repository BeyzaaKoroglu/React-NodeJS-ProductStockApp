const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      products,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });

    res.status(200).json({
      status: 'success',
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    product.name = req.body.name;
    product.stock = req.body.stock;
    product.save();

    res.status(200).json({
      status: 'success',
      product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findOneAndRemove({ _id: req.params.id });

  try {
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
