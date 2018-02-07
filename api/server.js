var http = require('http');
var jobs = require('./jobs.json');

var app = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(jobs));
    response.end();
});

app.listen(3000);
console.log('Server listening on port 3000');