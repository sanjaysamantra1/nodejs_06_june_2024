const express = require('express');
const app = express();

app.use(express.json()); // middlewares

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log('I am Login Route', email, password);
    res.send('POST request Received')
});

app.listen(5000, () => {
    console.log('Server Running at 5000 port')
});