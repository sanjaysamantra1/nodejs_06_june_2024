const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('This is Home Route')
})
app.get('/about', (req, res) => {
    res.status(200).send('This is About Route')
})
app.get('/careers', (req, res) => {
    res.status(200).send('This is Careers Route')
})
app.get('*', (req, res) => {
    res.status(400).send('No Route Found')
})

app.listen(5000, () => {
    console.log('Server Running at 5000 port')
});