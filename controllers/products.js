const Product = require('../models/products');

exports.postNewProduct = (req, res) => {
  console.log(req.body);
  let {
    productName,
    category,
    techdetails,
    productimgs,
    description,
    price,
    createdAt,
    modifiedAt,
    rating
  } = req.body;

  var product = new Product({
    productName,
    category,
    techdetails,
    productimgs,
    description,
    price,
    createdAt,
    modifiedAt,
    rating
  });
  product.save().then((product) => {
    console.log('Added successfully');
    res.json(product);
  })
};

exports.getAllProducts = (req, res) => {
  Product.find({}, (error, products) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (products) {
      res.json({
        data: products,
        message: "All products fetched",
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

exports.getProductById = (req, res) => {
  Product.findById(req.params.id, (err, products) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (products) {
      res.json({
        data: products,
        message: "Product data fetched successfully",
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


exports.updateProductById = (req, res) => {
  console.log(req.body);
  const {
    productName,
    category,
    techdetails,
    productimgs,
    description,
    price,
    createdAt,
    modifiedAt,
    rating
  } = req.body;
  Product.update({
    _id: req.params.id
  }, {
    productName,
    category,
    techdetails,
    productimgs,
    description,
    price,
    createdAt,
    modifiedAt,
    rating
  }, {}, (error, product) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    console.log(error);
    res.json(product);
  });
};

exports.deleteProductById  = (req, res) => {
  Product.findOneAndDelete({
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
};