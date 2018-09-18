const Order = require('../models/orders');

exports.postNewOrder = (req, res) => {
  console.log(req.body);
  let {
    product_id,
    user_id,
    address,
    payment,
    createdAt
  } = req.body;

  var order = new Order({
    product_id,
    user_id,
    address,
    payment,
    createdAt
  });
  order.save().then((order) => {
    console.log('Added successfully');
    res.json(order);
  })
};

exports.getAllOrders = (req, res) => {
  Order.find({}, (error, orders) => {
    if (error) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (orders) {
      res.json({
        data: orders,
        message: "All orders fetched",
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

exports.getOrderById = (req, res) => {
  Order.findById(req.params.id, (err, orders) => {
    if (err) {
      res.json({
        message: "Server error, Please try after some time.",
        status: 500
      });
    }
    if (orders) {
      res.json({
        data: orders,
        message: "Order data fetched successfully",
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


exports.updateOrderById = (req, res) => {
  console.log(req.body);
  const {
    order_id,
    user_id,
    address,
    payment,
    createdAt
  } = req.body;
  Order.update({
    _id: req.params.id
  }, {
    order_id,
    user_id,
    address,
    payment,
    createdAt
  }, {}, (error, order) => {
    if (error)
      res.json({
        error: error,
        status: 500
      });
    console.log(error);
    res.json(order);
  });
};

exports.deleteOrderById  = (req, res) => {
  Order.findOneAndDelete({
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