const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page!')
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page!')
    }
    // res.end('<h1>Oooops!</h1><p>We can not seem to find the page you are loking for</p><a href="/">back home</a>')
});

server.listen(5000);

//How to start my own server