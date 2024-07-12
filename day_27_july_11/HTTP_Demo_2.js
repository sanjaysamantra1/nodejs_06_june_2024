const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Request Received!!!");
    res.setHeader("Content-Type","text/html")
    res.write("<h1>Sorry, No data available</h1>");
    // res.write("<h1>This is Response From HTTP Server</h1>");
    res.end();
});
server.listen(5000, () => {
    console.log("Server Started at 5000 port")
});

// setTimeout(server.close, 20000);