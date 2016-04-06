'use strict';
const path = require('path'),
	  express = require('express'),
	  exphbs = require('express-handlebars'),
	  router = require('./router'),
	  app = express();



app.use('/static',express.static(path.join(__dirname,'public')))

//设置引擎
app.engine('.hbs', exphbs({defaultLayout:'index',extname:'.hbs'}))

app.set('view engine', '.hbs')

//设置路由
router.setRequestUrl(app)

app.listen(5000,function(){
	console.log('管理后台已经启动')
})
