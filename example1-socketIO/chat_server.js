//初始化一些值	
	var userCount = 1;
	var nickNames = [];
exports.startSocketServer = function(app){
		var server = require('http').createServer(app);
		var io = require('socket.io')(server);

		io.on('connection', function(socket){
			
			socket.emit('hello',{data:'欢迎'+socket.id+'来到马刺聊天室',id:socket.id});

			 socket.on('message', function (msg) {
			 	console.log(msg.id+'加入聊天室')
			})

	  });

		server.listen(app.get('port'), function() {
		  console.log('服务器的端口是:' + server.address().port);
		});

}
