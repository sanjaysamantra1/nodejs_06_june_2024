const express = require('express');
const app = express();

app.engine('pug', require('pug').__express)
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render("index");
})
app.get('/users', async (req, res) => {
    const users = ['Praveen','Nahid','Anurag','Deepak','Bharathi']
    res.render("users",{users});
})
app.listen(5000, () => {
    console.log('app Running at 5000 port')
});
