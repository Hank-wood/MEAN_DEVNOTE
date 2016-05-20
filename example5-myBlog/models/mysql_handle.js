'use strict'
const mysql = require('mysql'),
	  config = require('../config')

//创建一个远程连接
let db = mysql.createConnection({
	  	host:'127.0.0.1',
	  	user:'root',
	  	password:'Wu314159',
	  	database:'myBlog'
	  });

//封装查询数据库
class DBHandle {
	constructor() {
	    this.db = db
  	}
//添加单条数据
	insertValue(arr,tableName,callback){
		let  addSql = 'INSERT INTO '+tableName+'(userid,accout,pass) VALUES(?,?,?)',
			 addSqlParams = arr;
		this.db.connect();
			this.db.query(addSql,addSqlParams,function(err, rows, fields) {
			  if (err) throw err;
			  console.log('The solution is:',rows);
			  callback()
			});
		this.db.end();
	}
}

module.exports = DBHandle