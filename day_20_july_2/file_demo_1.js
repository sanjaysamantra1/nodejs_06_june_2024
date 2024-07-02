const fs = require('fs');
fs.readFile('./abc.txt', (err, data) => {
    console.log(data.toString())
})
