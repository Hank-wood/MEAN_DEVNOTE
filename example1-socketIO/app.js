var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.set('port', process.env.PORT || 8086);
app.use('/static',express.static(path.join(__dirname,'public')))

var usersName = ['邓肯','帕克','吉诺比利'];
var users =[];
var user = {};
var userCount = 1;


  io.on('connection', function(socket){
    var currUserCount = userCount;
    
    user.id = socket.id;
    user.userName = usersName[currUserCount-1];
    users.push(user);
    console.log('一个新用户加入了'+users[currUserCount-1].userName);
  	  socket.on('chatMessage', function(msg){
  	    console.log('消息: ' + msg);
  	    io.emit('chatMessage',{'userName':users[currUserCount-1].userName,'body':msg});
  	  });

      socket.on('disconnect', function() {
        socket.emit('bye',users[currUserCount-1].userName);
      });
      userCount++;
  });

app.get('/',function (req,res){
  res.sendfile('index.html')
})


server.listen(app.get('port'), function() {
  console.log('服务器的端口是:' + server.address().port);
});