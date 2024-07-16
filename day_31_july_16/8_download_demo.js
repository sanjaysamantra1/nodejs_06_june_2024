const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res)=>{
    res.send(`
        please follow the below 2 Links to either open / download the file
        <br/>
        <a href='http://localhost:5000/downloadFile'>Download</a>
        <br/>
        <a href='http://localhost:5000/sendFile'>Open Image</a>
    `)
})

app.get('/sendFile', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'nodejs.png'));
    console.log(path.resolve(__dirname, 'nodejs.png'))
});
app.get('/downloadFile', (req, res) => {
    res.download(path.resolve(__dirname, 'nodejs.png'));
    console.log(path.resolve(__dirname, 'nodejs.png'))
});

app.listen(5000, () => {
    console.log('server running at 5000')
});