var path = require('path');
var express = require('express');
var jobs = require('./jobs.json');
var _ = require('lodash');

var app = express();

//cors
app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (request, response) => {
  response.send('API');
});

app.get('/jobs', (request, response) => {
  response.send(jobs);
});

app.get('/jobs/:id', (request, response) => {
  const job = _.find(jobs, (job) => job.id === request.params.id);
  response.send(job);
});

app.listen(3000, () => console.log('API on 0.0.0.0:3000'));