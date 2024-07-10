const fs = require('fs');

fs.watch('./file1.txt', (event,data) => {

    console.log(`${data} changed`);
    console.log(event,data)
})