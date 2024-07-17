const products = require('./products.json');

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Home Page');
})
app.get('/products', (req, res) => {
    res.send(products);
})
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id == id);
    res.send(product);
})
app.get('/products/:id/reviews', (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id == id);
    res.send(product.reviews);
})
app.get('/products/:id/reviews/:reviewId', (req, res) => {
    const id = req.params.id;
    const reviewId = req.params.reviewId;
    const product = products.find(product => product.id == id);
    const review = product.reviews.find(review => review.rating == reviewId);
    res.send(review);
})
app.listen(5000, () => {
    console.log('app Running at 5000 port')
});
