const http = require('http')

const hostname = '127.0.0.1'
const port = 8888;

const server = http.createServer((req, res) => {
    // bai9
    if (req.headers["x-access-token"] == "nextsolution") {
        res.statusCode = 200;
        res.end('Welcome')
    } else {
        res.statusCode = 404;
        res.end('Acceess Denied')
    }
    
    
    // if (req.url == "/hello" && req.method == "GET") {
    //     console.log(req);
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain')
    //     res.end('Hello World!\n')
    // }
    // if (req.url == "/hello" && req.method == "POST") {
    //     console.log(req.body);
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain')
    //     res.end('Hello World!\n')
    // } else {
    //     console.log(req);
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain')
    //     res.end('DEFAULT!\n')
    // }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})