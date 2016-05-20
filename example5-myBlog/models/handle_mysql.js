'use strict'
const mysql = require('mysql')

//创建一个远程连接
let db = mysql.createConnection({
	  	host:'127.0.0.1',
	  	user:'root',
	  	password:'Wu314159',
	  	database:'myBlog'
	  });
//插入语句
// INSERT INTO table_name ( field1, field2,...fieldN )
//                        VALUES
//                        ( value1, value2,...valueN );

//封装查询数据库
class DBHandle {
	constructor(db) {
	    this.db = db
  	}
//添加单条数据
	insertValue(obj,db){
		let  addSql = 'INSERT INTO user(userid,account,pass) VALUES(?,?,?)',
			 addSqlParams = ['userid','acoount',''];
			 for(let key in obj){
			 	addSqlParams.push(obj[key])
			 }
		db.connect();
			connection.query(addSql,addSqlParams,function(err, rows, fields) {
			  if (err) throw err;
			  console.log('The solution is: ',rows[0].solution);
			});
		db.end();
	}
}

module.exports = DBHandle