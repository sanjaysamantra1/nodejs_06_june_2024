const express = require('express');
const cors = require('cors');
const { newPayment, checkStatus } = require('./payment');

const app = express();
app.use(express.json())
app.use(cors())


app.post('/payment', newPayment);
app.post('/status/:txnId', checkStatus);

app.listen(5000, () => {
    console.log('Server Running at 5000 port')
});