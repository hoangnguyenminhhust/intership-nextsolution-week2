const http = require('http')

const hostname = '127.0.0.1'
const port = 8888;

const server = http.createServer((req, res) => {
    // // bai9
    // if (req.headers["x-access-token"] == "nextsolution") {
    //     res.statusCode = 200;
    //     res.end('Welcome')
    // } else {
    //     res.statusCode = 404;
    //     res.end('Acceess Denied')
    // }
    
    // bai8
    if (req.method === 'POST' && req.url === '/hello') {
        let body = '';

        req.on('data', (chunk) => {
            console.log('body' + chunk)
            body += chunk
        }).on('end', () => {
            psbody = JSON.parse('{' + `${body}` +'}');
            console.log( body);
            var name = psbody.name;
            res.end('hello ' + `${name}`), err => {console.log(err)};

        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})