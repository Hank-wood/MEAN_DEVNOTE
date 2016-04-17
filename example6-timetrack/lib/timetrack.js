'use strict';
const qs = require('querystring');

exports.sendHtml = function(res,html){
	res.setHeader('Content-Type','text/html;charset=utf8');
	res.setHeader('Content-Length',Buffer.byteLength(html));
	res.end(html)
}