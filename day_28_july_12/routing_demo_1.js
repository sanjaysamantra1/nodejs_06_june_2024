const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.write('<h1>This is Home Route</h1>')
    } else if (url === "/aboutus") {
        res.write('<h1>This is Aboutus Route</h1>')
    } else if (url === "/careers") {
        res.write('<h1>This is careers Route</h1>')
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write(`
            <h1>OOPS</h1>
            <p>Sorry, Not able to find the page you are looking for</p>
            <a href='/'>Go To Home Page</a>
        `)
    }
    res.end();
});

server.listen(5000, () => { console.log('server running at 5000') })