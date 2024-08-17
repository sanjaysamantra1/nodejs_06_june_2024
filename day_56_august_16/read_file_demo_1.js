const fs = require('fs');

console.time('read');
fs.readFile('./file1.txt', (err, data) => {
    if (data) {
        console.log(data.toString())
        console.timeEnd('read')
    }
})