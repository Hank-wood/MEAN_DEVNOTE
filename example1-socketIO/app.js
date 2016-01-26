'use strict';
const path = require('path')
const charServer = require('./chat_server')
const express = require('express')
const exphbs = require('express-handlebars') 
const app = express()
app.set('port', process.env.PORT || 8086)
app.use('/static',express.static(path.join(__dirname,'public')))

//设置引擎
app.engine('.hbs', exphbs({defaultLayout:'index',extname:'.hbs'}))
app.set('view engine', '.hbs')

app.get('/',(req,res) => {
  res.render('pages/chat_room')
})


//socketio服务器
charServer.startSocketServer(app)

