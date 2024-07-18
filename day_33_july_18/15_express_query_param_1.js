const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
})
app.get('/users', (req, res) => {
    const { name, address } = req.query;
    res.send({ name, address });
})
app.listen(5000, () => {
    console.log('app Running at 5000 port')
});
// http://localhost:5000/users?name=sachin&address=bangalore

