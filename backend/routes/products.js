var express = require("express");
var router = express.Router();

const {
  getProducts,
  getProductById,
  getFavorites,
  editProduct,
} = require("../controllers/product");

router.get("/", getProducts);
router.get("/favorites", getFavorites);
router.get("/:productId", getProductById);
router.put("/:productId", editProduct);

module.exports = router;
