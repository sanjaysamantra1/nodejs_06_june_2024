const fs = require('fs');

// asynchronous 
fs.unlink('./file2.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File Deleted Successfully!!!')
})

// Synchronous way 
try {
    fs.unlinkSync('./file2.txt')
    console.log('File Deleted Successfully!!!')
} catch (err) {
    console.log(err);
}