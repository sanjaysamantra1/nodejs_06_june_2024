const fs = require('fs');

fs.stat('./file1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.isFile())
    console.log(data.isDirectory())
    console.log(data.size + ' KB')
})