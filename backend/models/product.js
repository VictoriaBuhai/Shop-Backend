const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    manLength: 5,
    maxlength: 200,
  },
  price: {
    type: Number,
    required: true,
  },

  imagePath: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
