const fs = require('fs');

fs.readdir('./', (err, data) => {
    // console.log(data);
    data.forEach(ele => {
        const stat = fs.statSync(ele)
        const type = stat.isDirectory() ? '📁' : '🏢';
        console.log(type, ele)
    })
})