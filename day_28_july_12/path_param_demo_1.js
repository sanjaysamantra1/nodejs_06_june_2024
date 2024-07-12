const http = require('http');
const users = require('./users.json');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.write('<h1>This is Home Route</h1>')
    } else if (url === "/users") {
        res.write(JSON.stringify(users));
    }
    
    const userId = url.split('/users/').pop();
    const user = users.find(usr => usr.id == userId);
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.write(`<h1>No User Found with id ${userId}</h1>`)
    }
    res.end();
});

server.listen(5000, () => { console.log('server running at 5000') })