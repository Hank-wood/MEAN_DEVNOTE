'use strict';
const path = require('path'),
	  bodyParser = require('body-parser'),
	  cookieParser = require('cookie-parser'),
	  express = require('express'),
	  exphbs = require('express-handlebars'),
	  router = require('./router'),
	  app = express();


//请求主体解析
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

//cookie解析
app.use(cookieParser())
app.use('/static',express.static(path.join(__dirname,'public')))

//设置引擎
app.engine('.hbs', exphbs({defaultLayout:'index',extname:'.hbs'}))

app.set('view engine', '.hbs')

//设置路由
router.setRequestUrl(app)

app.listen(5000,function(){
	console.log('blog管理后台已经启动')
})
