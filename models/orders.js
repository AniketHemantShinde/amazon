const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  product_id: String,
  user_id: String,
  address: String,
  payment: Array,
  createdAt: Date
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;