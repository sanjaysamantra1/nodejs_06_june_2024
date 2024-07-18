const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
})
app.get('/temp',async (req, res) => {
    const { city } = req.query;
    const myUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    const response = await axios.get(myUrl);
    res.send(response.data);
})
app.listen(5000, () => {
    console.log('app Running at 5000 port')
});
// http://localhost:5000/temp?city=mumbai

