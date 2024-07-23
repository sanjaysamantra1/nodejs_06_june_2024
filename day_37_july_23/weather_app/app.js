const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static(__dirname + "/public"));
app.engine('ejs', require('ejs').__express);
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('<h1>This is Home Route</h1>')
})
app.get('/weather', async (req, res) => {
    let city = req.query.city || 'bangalore';
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    // calling API to get weather information
    let response = await axios.get(url);
    res.render('index', { title: 'Weather Application', result: response.data })
})

app.listen(5000, () => {
    console.log('app Running at 5000 port')
});