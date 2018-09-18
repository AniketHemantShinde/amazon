const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/petShop');
mongoose.connection.on('error',function(){
    console.log('error in mongo connection');
})
mongoose.connection.on('open',function(){
    console.log('connected to mongo');
})


const userController = require('./controllers/users');
const productController = require('./controllers/products');
const orderController = require('./controllers/orders');
const reviewController = require('./controllers/review');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))


app.get('/',function(req,res){
    res.send('Hello World');
});

app.post('/api/v1/users', userController.postNewUser);
app.get('/api/v1/users', userController.getAllUsers);
app.get('/api/v1/users/:id', userController.getUserById);
app.put('/api/v1/users/:id', userController.updateUserById);
app.delete('/api/v1/users/:id', userController.deleteUserById);

app.post('/api/v1/products', productController.postNewProduct);
app.get('/api/v1/products', productController.getAllProducts);
app.get('/api/v1/products/:id', productController.getProductById);
app.put('/api/v1/products/:id', productController.updateProductById);
app.delete('/api/v1/products/:id', productController.deleteProductById);

app.post('/api/v1/orders', orderController.postNewOrder);
app.get('/api/v1/orders', orderController.getAllOrders);
app.get('/api/v1/orders/:id', orderController.getOrderById);
app.put('/api/v1/orders/:id', orderController.updateOrderById);
app.delete('/api/v1/orders/:id', orderController.deleteOrderById);

app.post('/api/v1/reviews', reviewController.postNewReview);
app.get('/api/v1/reviews', reviewController.getAllReviews);
app.get('/api/v1/reviews/:id', reviewController.getReviewById);
app.put('/api/v1/reviews/:id', reviewController.updateReviewById);
app.delete('/api/v1/reviews/:id', reviewController.deleteReviewById);


app.set('port',3000);
app.listen(app.get('port'),function(){
    console.log('the server is working');
})