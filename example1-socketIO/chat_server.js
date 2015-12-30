//初始化一些值	
	var userCount = 1;
	var nickNames = {};
	var nameUsed = []; //被使用过的名字
	var currentRoom = {};
//分配用户昵称		
		function assignGuestName(socket,userCount,nickNames,nameUsed){
				var name = '马刺球员'+ userCount;
				nickNames[socket.id] = name;
				socket.emit('nameResult',{
					success:true,
					name:name
				})
				nameUsed.push(name)
				return userCount+1;
		}
//进入聊天室
		function joinRoom(socket,room){

		}
exports.startSocketServer = function(app){
		var server = require('http').createServer(app);
		var io = require('socket.io')(server);

		io.on('connection', function(socket){
			userCount = assignGuestName(socket,userCount,nickNames,nameUsed);

			joinRoom(socket,'疯狂马刺球迷区');

			handleMessageBroadcasting(socket,nickNames)//处理用户信息

			handleNameChangeAttempts(socket,nickNames,nameUsed)//更改用户名字

			handleRoomJoining(socket)//聊天室的创建和变更

			handleClientDisconnection(socket,nickNames,nameUsed)
	  });

		server.listen(app.get('port'), function() {
		  console.log('服务器的端口是:' + server.address().port);
		});

}
