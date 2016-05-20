'use strict'
const cryptoHandle = require('../../util/crypto_handle'), 
	  DBHandle = require('../../models/mysql_handle.js');
	let dbHandle = new DBHandle()

exports.postUserRegisterInfor = (req,res) => {
	let postData = req.body.param,
		postObj = JSON.parse(postData);
		postObj.passWord = cryptoHandle.md5(postObj.passWord);
		console.log(postObj)
		let postSqlData = [];
		dbHandle.insertValue([1,postObj.accout,postObj.passWord],'user',
		function(){
			res.redirect('/admin')
		})
}