const fs = require('fs');

let file1Content = fs.readFileSync('./file1.txt', 'utf-8');
let file2Content = fs.readFileSync('./file2.txt', 'utf-8');
fs.writeFileSync('./file3.txt', file1Content + "\n" + file2Content);