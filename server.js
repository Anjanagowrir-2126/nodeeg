const http = require('http');
const fs = require('fs');
const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('pageLoaded', function(page) {
    console.log(page + ' was loaded successfully');
});

const server = http.createServer(function(req, res) {

    let page = '';

    if (req.url == '/about') {
        page = 'about.html';
    }
    else if (req.url == '/contact') {
        page = 'contact.html';
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page Not Found</h1>');
        return;
    }

    fs.readFile(page, 'utf8', function(err, data) {

        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Page Not Found</h1>');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);

        eventEmitter.emit('pageLoaded', page);
    });

});

server.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});