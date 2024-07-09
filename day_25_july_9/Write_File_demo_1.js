const fs = require('fs');

fs.writeFile('./file3.txt', 'Hello Good Evening', (err, data) => {
    console.log('Write operation done!!!')
})