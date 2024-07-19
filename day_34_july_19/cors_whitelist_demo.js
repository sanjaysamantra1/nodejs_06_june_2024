const users = require('../day_28_july_12/users.json');
const express = require('express');
const cors = require('cors');
const app = express();

var whitelist = ['https://www.w3schools.com', 'https://www.javatpoint.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send('Home Page');
})
app.get('/users', (req, res) => {
    res.json(users)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    res.send(user);
})
app.post('/users', (req, res) => {
    res.send('Employee Added Succesfully!!!');
})
app.put('/users/:id', (req, res) => {
    res.send('Employee Updated Succesfully!!!');
})
app.delete('/users/:id', (req, res) => {
    res.send('Employee Deleted Succesfully!!!');
})

app.listen(5000, () => {
    console.log('app Running at 5000 port')
});
