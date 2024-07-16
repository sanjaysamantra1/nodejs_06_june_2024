const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('All users')
})
userRouter.get('/details', (req, res) => {
    res.send('1 user details')
})

module.exports = userRouter;
