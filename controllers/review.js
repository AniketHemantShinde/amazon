const Review = require('../models/review');

exports.postNewReview = (req, res) => {
  let {
    product_id,
    user_id,
    photo,
    overallrating,
    slug,
    title,
    comment,
    createdAt
  } = req.body;
  var review = new Review({
    product_id,
    user_id,
    photo,
    overallrating,
    slug,
    title,
    comment,
    createdAt
  });
  review.save().then((review) => {
    console.log('Added successfully');
    res.json(review);
  });
};

exports.getAllReviews = (req, res) => {
  Review.find({}, (error, reviews) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (reviews) {
      res.json({
        data: reviews,
        message: "All reviews fetched",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
}

exports.getReviewById = (req, res) => {
  Review.findById(req.params.id, (err, review) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (review) {
      res.json({
        data: review,
        message: "User data fetched successfully",
        status: 200
      });
    } else {
      res.json({
        message: "No data found",
        status: 200
      });
    }
  });
};

exports.updateReviewById = (req, res) => {
  const {
    product_id,
    user_id,
    photo,
    overallrating,
    slug,
    title,
    comment,
    createdAt
  } = req.body;
  Review.update({
    _id: req.params.id
  }, {
    product_id,
    user_id,
    photo,
    overallrating,
    slug,
    title,
    comment,
    createdAt
  }, {}, (error, review) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    console.log(error);
    res.json(review);
  });
};

exports.deleteReviewById = (req, res) => {
  Review.findOneAndDelete({
    _id: req.params.id
  }, (error, deleteId) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    res.json({
      message: "Deleted successfully"
    });
  });
}