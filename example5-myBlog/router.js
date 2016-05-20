'use strict'
const register = require('./controllers/login/register')
exports.setRequestUrl = (app) => {
//登录界面操作
	app.get('/login',(req,res) => {
	  res.render('pages/login/login',{
	  	title:'登录'
	  })
	})
	app.post('/login',(req,res) => {
		  console.log(req.body.param);
		  res.json({success:true})
	})
//注册
	app.get('/register',(req,res) => {
	  res.render('pages/login/register',{
	  	title:'注册'
	  	})
	})
	app.post('/register',(req,res) => {
	  	register.postUserRegisterInfor(req,res)
	})

}
