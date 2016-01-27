'use strict';
//初始化一些值	
	var userCount = 1;
	var nickNames = [];

//创建每一个连接socket
	function EachSocket(socket,name){
		this.userName = name;
		this.id = socket.id;
	}

exports.startSocketServer = (app) => {
		var server = require('http').createServer(app);
		var io = require('socket.io')(server);

		io.on('connection',(socket) => {

			socket.on('sendMessage',(msg) => {
				io.sockets.emit('sendMessage',msg);
			})

			socket.on('disconnect',() => {
				io.sockets.emit('有人离开了聊天室');
			})

	  });

		server.listen(app.get('port'),() => {
		  console.log('欢迎来到wray聊天室');
		});

}


