const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  sku: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  features: { type: String },
  size: { type: String },
  price: { type: Number, required: true },
  sds: { type: String },
  images: { type : Array , "default" : [] },
  videos: { type : Array , "default" : [] },
  stock: { type: Number, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;