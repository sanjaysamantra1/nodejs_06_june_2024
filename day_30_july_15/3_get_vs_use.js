const express = require('express');
const app = express();

app.use(express.json())

app.get('/aaa', (req, res) => {
    res.send('GET call on aaa Route')
})
app.get('/bbb', (req, res) => {
    res.send('bbb route')
})

app.listen(5000, () => {
    console.log('Server Running at 5000 port')
});