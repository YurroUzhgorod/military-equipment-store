const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productScheme = new Schema({
  code: { type: Number, required: true },
  title: { type: String, required: true, maxLength: 50, trim: true },
  description: { type: String, required: true, maxLength: 1000, trim: true },
  manufacturer: { type: String, required: true, maxLength: 50, trim: true },
  category: { type: String, required: true, trim: true },
  sub_category: { type: String, required: true },
  price: { type: Number, required: true, min: 1, max: 50000, trim: true },
  photo: { type: String, required: true, trim: true },
  is_available: { type: Boolean, default: true, trim: true },
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
  },
});

const ProductModel = mongoose.model("Product", productScheme);
module.exports = ProductModel;
