const express = require('express');
const app = express();


app.use('/book', (req, res) => { // if url starts with book
    res.send('Book Route')
})
app.all('/product', (req, res) => {
    res.send('Product route')
})

app.listen(5000, () => {
    console.log('Server Running at 5000 port')
});