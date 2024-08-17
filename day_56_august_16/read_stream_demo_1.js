const fs = require('fs');

const readStream = fs.createReadStream('file1.txt', 'utf8');
let chunkCount = 0
console.time('read')
readStream.on('data', (chunk) => {
    chunkCount++;
    console.log('Received Chunk::::', chunk )
})
readStream.on('end', () => {
    console.log('data reading completed in ', chunkCount)
    console.timeEnd('read')
})
readStream.on('error', (err) => {
    console.log('error occured')
})