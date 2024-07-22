const products = require('./data/products.json');
const express = require('express');
const app = express();

app.engine('ejs', require('ejs').__express);
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("pages/home");
})
app.get('/about', (req, res) => {
    res.render("pages/about");
})
app.get('/careers', (req, res) => {
    res.render("pages/careers");
})
app.get('/products', (req, res) => {
    res.render("pages/products", { products });
})

app.listen(5000, () => {
    console.log('app Running at 5000 port')
});
