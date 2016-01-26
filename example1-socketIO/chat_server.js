'use strict';
//初始化一些值	
	var userCount = 1;
	var nickNames = [];
exports.startSocketServer = (app) => {
		var server = require('http').createServer(app);
		var io = require('socket.io')(server);

		io.on('connection',(socket) => {
			socket.on('sendMessage',(msg) => {
				io.sockets.emit('sendMessage',msg);
			})
	  });

		server.listen(app.get('port'),() => {
		  console.log('欢迎来到wray聊天室');
		});

}
