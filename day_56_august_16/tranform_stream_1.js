const { Transform } = require("stream");

const upperCaseTransformStream = new Transform({
    transform(chunk, encoding, callback) {
        const transformedData = chunk.toString().toUpperCase();
        this.push(transformedData);
        callback();
    }
})
upperCaseTransformStream.on('data', (transformedChunk) => {
    console.log(transformedChunk.toString())
})
upperCaseTransformStream.write("Hello.\n");
upperCaseTransformStream.write("Good Evening.\n");
upperCaseTransformStream.end();