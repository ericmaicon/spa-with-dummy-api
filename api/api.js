var http = require('http');
var jobs = require('./jobs.json');

var app = http.createServer((request, response) => {
  //cors
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(jobs));
  response.end();
});

app.listen(3000, () => console.log('Running on 0.0.0.0:3000'));