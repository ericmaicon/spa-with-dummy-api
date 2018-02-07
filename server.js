var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, './dist/')));
app.listen(3333, () => console.log('Running on 0.0.0.0:3333'));