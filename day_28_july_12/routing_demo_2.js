const http = require('http');

const server = http.createServer((req, res) => {
    const { url, method } = req; // Object De-Structuring

    res.writeHead(200, { 'content-type': 'text/html' });    
    if (url === "/") {
        res.write('<h1>This is Home Route</h1>')
    } else if (url === "/login") {
        res.write(`
            <center>
                <h2>Login Form</h2>

                <form action='/login-success' method='POST'>
                    <p>UserName : <input name='userName' /></p>
                    <p>password : <input name='password' type='password' /></p>
                    <button type='submit'>Login</button>
                </form>
            </center>
        `)
    } else if (url === "/login-success" && method === 'POST') {
        res.write('<h1>Login Success</h1>')
    }
    res.end();
});

server.listen(5000, () => { console.log('server running at 5000') })