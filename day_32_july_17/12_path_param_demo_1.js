const users = require('../day_28_july_12/users.json');

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Home Page');
})
app.get('/users', (req, res) => {
    res.send(users);
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    res.send(user);
})
app.listen(5000, () => {
    console.log('app Running at 5000 port')
});
