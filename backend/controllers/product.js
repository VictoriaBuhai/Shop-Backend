module.exports = { getProducts, getProductById };

const Product = require("../models/product");

async function getProducts(req, res, next) {
  try {
    const products = await Product.find();
    if (products) {
      res.send(products);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function getProductById(req, res, next) {
  try {
    const product = await Product.findById(req.params.productId);
    if (product) {
      res.send(product);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}
