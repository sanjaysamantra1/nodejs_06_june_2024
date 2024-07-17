const express = require('express');
const axios = require('axios');
const app = express();


app.get('/', (req, res) => {
    res.send('Home Page');
})
app.get('/users/:userName', async (req, res) => {
    const githubUserName = req.params.userName;
    let response = await axios.get(`https://api.github.com/users/${githubUserName}`);
    res.send(response.data);
})

app.listen(5000, () => {
    console.log('app Running at 5000 port')
});
