var path = require('path');
var charServer = require('./chat_server')
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 8086);
app.use('/static',express.static(path.join(__dirname,'public')))


app.get('/',function (req,res){
  res.sendfile('index.html')
})
//socketio服务器
charServer.startSocketServer(app)

