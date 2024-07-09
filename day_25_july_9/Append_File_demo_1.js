const fs = require('fs');

fs.appendFile('./file3.txt', 'Hello Good Evening \n', (err, data) => {
    console.log('Write operation done!!!')
})