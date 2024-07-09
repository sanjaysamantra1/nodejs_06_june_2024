const fs = require('fs');

fs.readFile('./file1.txt', (err, data) => {
    console.log(data);
    console.log(data.toString());
})
fs.readFile('./file2.txt', 'utf-8', (err, data) => {
    console.log(data);
})

// Error first callback
