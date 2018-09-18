const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
  product_id: String,
  user_id: String,
  photo: Array,
  overallrating: Number,
  slug: String,
  title: String,
  comment: String,
  createdAt: Date
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;