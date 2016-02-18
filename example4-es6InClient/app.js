'use strict';
//引入外部模块
const path = require('path')
const express =  require('express')
const app = express()

//静态文件
app.use('/static',express.static(path.join(__dirname,'public')))

app.get('/',(req,res) => {
	res.sendfile('index.html')
})

app.listen(5000,() => {
	console.log('前端使用es6已经开始...')
})