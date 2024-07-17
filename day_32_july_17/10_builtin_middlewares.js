const express = require('express');
const path = require('path')
const app = express();

const jsonParser = express.json();
const formDataParser = express.urlencoded();

app.get('/', (req, res) => {
    res.sendFile(path.resolve("./form1.html"));
})
app.post('/submit-student-data', formDataParser, (req, res) => {
    res.send(`FirstName:: ${req.body.firstName} and lastName: ${req.body.lastName}`)
})
app.post('/login', jsonParser, (req, res) => {
    res.send(`Email:: ${req.body.email} and Passowrd: ${req.body.password}`)
})

app.listen(5000, () => {
    console.log('Server Running at 5000 port')
});
