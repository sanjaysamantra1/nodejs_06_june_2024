const http = require('http');

function requestListener(req, res) {
    console.log("request Received");
    console.log(req.url, req.method);
    res.write('<h1>This is Response From Server</h1>');
    res.end();
}

const server = http.createServer(requestListener);
server.listen(5000);