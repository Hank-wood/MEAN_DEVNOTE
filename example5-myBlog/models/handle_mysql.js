'use strict'
const mysql = require('mysql')

//创建一个远程连接
let db = mysql.createConnection({
	  	host:'127.0.0.1',
	  	user:'root',
	  	password:'Wu314159',
	  	database:'myBlog'
	  });

//封装查询数据库

