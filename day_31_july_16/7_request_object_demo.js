const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const { url, method, body, protocol, params, ip } = req;
    console.log(url, method, body, protocol, params, ip )
    console.log(req )
    res.send('server working')
    res.sendsta
})

app.listen(5000, () => {
    console.log('server running at 5000')
});