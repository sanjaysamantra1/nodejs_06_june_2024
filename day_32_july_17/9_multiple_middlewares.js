const express = require('express');
const users = require('../day_28_july_12/users.json');
const server = express();

const middleware1 = (req, res, next) => {
    console.log('this is middleware-1');
    next()
}
const middleware2 = (req, res, next) => {
    console.log('this is middleware-2');
    res.setHeader("X-New-Policy", "Success");
  next();
}
server.use(middleware2)
server.use(middleware1)

server.get('/', (req, res) => {
    console.log('route')
    res.send('Home Page');
})
server.get('/users', (req, res) => {
    console.log('user sroute')
    res.write(JSON.stringify(users));
})

server.listen(5000, () => {
    console.log('Server Running at 5000 port')
});
