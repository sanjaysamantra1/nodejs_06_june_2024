const fs = require('fs');

fs.rename('file2.txt', 'file3.txt', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log('Renamed successfully')
})