const http = require('http');
const users = require('../day_28_july_12/users.json');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    const userId = url.split('users/').pop();
    console.log(userId, typeof userId)

    if (url === '/' && method === 'GET') {
        res.write('<h1>This is Home Page</h1>')
    }
    if (url === '/users' && method === 'GET') {
        res.write(JSON.stringify(users));
    }
    if (url.includes('/users') && method === 'GET' && userId) {
        const user = users.find(user => user.id === +userId);
        res.write(JSON.stringify(user));
    }
    if (url.includes('/users') && method === 'POST') {
        res.write('<h1>Employee Added Succesfully!!!</h1>')
    }
    if (url.includes('/users') && method === 'PUT') {
        res.write('<h1>Employee Updated(PUT) Succesfully!!!</h1>')
    }
    if (url.includes('/users') && method === 'PATCH') {
        res.write('<h1>Employee Updated(PATCH) Succesfully!!!</h1>')
    }
    if (url.includes('/users') && method === 'DELETE') {
        res.write('<h1>Employee Deleted Succesfully!!!</h1>')
    }
    res.end();
});

server.listen(5000, () => {
    console.log('Server Running at 5000 port')
});
