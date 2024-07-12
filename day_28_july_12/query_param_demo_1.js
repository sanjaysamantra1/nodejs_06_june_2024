const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true);
    let { name, age } = urlObj.query;
    let msg = "";
    if (name && age) {
        res.writeHead(200, { 'content-type': 'text/html' });
        msg = `<p><center><b>${name}</b> is <b>${age}</b> Years old.`
    } else {
        res.writeHead(400, { 'content-type': 'text/html' });
        msg = `<p><center><b>Bad request`
    }
    res.write(msg);
    res.end();
});

server.listen(5000, () => { console.log('server running at 5000') });

// http://localhost:5000/user?name=sanjay&age=50