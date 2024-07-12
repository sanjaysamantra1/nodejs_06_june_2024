const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(404, { "content-type": "text/html" });
    res.write('<h1>Sorry, No Page Found</h1>')
    res.end();
});
server.listen(5000, () => {
    console.log("Server Started at 5000 port")
});
