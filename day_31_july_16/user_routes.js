const express = require('express');

function logger(req,res,next){
    console.log('control is in middleware')
    console.log('The time is: '+ Date.now())
    next(); // transfers the request to actual route
}

const userRouter = express.Router();
userRouter.use(logger);

userRouter.get('/', (req, res) => {
    res.send('All users')
})
userRouter.get('/details', (req, res) => {
    res.send('1 user details')
})

module.exports = userRouter;
