const fs = require('fs');

fs.readFile('./file1.txt', 'utf-8', (err, data1) => {
    console.log(data1);
    fs.readFile('./file2.txt', 'utf-8', (err, data2) => {
        console.log(data2);
        fs.writeFile('./file3.txt', data1 +"\n"+ data2, (err, data1) => {
            console.log('Written successfully');
        })
    })
})
