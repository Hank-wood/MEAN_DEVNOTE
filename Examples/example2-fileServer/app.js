'use strict';
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
//创建文件夹
	var date = (new Date()).getTime();
	try {
		fs.mkdirSync('sxb_temp'+date)
	} catch(e) {
		console.error('创建失败,文件已经存在')
	}



  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
