const express = require('express');
const users = require('../day_28_july_12/users.json');

const server = express();

server.get('/', (req, res) => {
    res.send('Home Page');
})
server.get('/users', (req, res) => {
    res.write(JSON.stringify(users));
})
server.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id );
    res.send(user);
})
server.post('/users', (req, res) => {
    res.send('Employee Added Succesfully!!!');
})
server.put('/users/:id', (req, res) => {
    res.send('Employee Updated Succesfully!!!');
})
server.delete('/users/:id', (req, res) => {
    res.send('Employee Deleted Succesfully!!!');
})

server.listen(5000, () => {
    console.log('Server Running at 5000 port')
});
