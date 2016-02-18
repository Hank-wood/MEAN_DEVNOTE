'use strict';
const http = require('http');
const fs = require('fs');
const generator = require('./es6_features/generator');
const setMap = require('./es6_features/setMap');
const es6Class = require('./es6_features/class');
const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
