const express = require('express');

const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.send('All Products')
})
productRouter.get('/details', (req, res) => {
    res.send('1 Product details')
})

module.exports = productRouter;
