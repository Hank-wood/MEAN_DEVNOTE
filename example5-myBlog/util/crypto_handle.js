'use strict';
const crypto = require('crypto');

//hash md5
exports.md5 = (str) => {
	let  md5sum = crypto.createHash('md5');
		md5sum.update(str);
		str = md5sum.digest('hex');
	return str;
}