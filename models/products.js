const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  category: String,
  techdetails: Array,
  productimgs: Array,
  description: String,
  price: String,
  createdAt: Date,
  modifiedAt: Date,
  rating: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;