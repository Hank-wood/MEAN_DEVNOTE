//初始化一些值	
	var userCount = 1;
	var nickNames = {};
	var namesUsed = []; //被使用过的名字
	var currentRoom = {};
//分配用户昵称		
function assignGuestName(socket,userCount,nickNames,namesUsed){
				var name = '马刺球员'+ userCount;
				nickNames[socket.id] = name;
				socket.emit('nameResult',{
					success:true,
					name:name
				});
				namesUsed.push(name);
				return userCount+1;
		}
//进入聊天室
function joinRoom(socket,room){
			socket.join(room);
			currentRoom[socket.id] = room;
			socket.emit('joinResult',{room:room});
//向这个room中的所用用户发送有新用户加入
			socket.to(room).emit('message',{
				text:nickNames[socket.id]+'加入了'+room
			})
			var usersInRoom = io.sockets.clients(room);
//如果不止一个用户在这个房间，统计一下用户
			if(usersInRoom.length>1)
			{
			var usersInRoomSummary = '这些用户在'+room+':';
			for(var index in usersInRoom)
			{
				var userSocketId = usersInRoom[index].id;
				if(index > 0)
				{
					usersInRoomSummary+=',';
				}
				usersInRoomSummary+=nickNames[userSocketId];
			}
			usersInRoomSummary+='.';
			socket.emit('message',{text:usersInRoomSummary})
			}
		}
//更改用户名字
function handleNameChangeAttempts(socket,nickNames,namesUsed){
			socket.on('nameAttempt',function(name){
				if(name.indexOf('马刺球员')== 0){
					socket.emit('nameResult',{
						success:false,
						message:'名字开头不能已马刺球员'
					})
				}
				else{
					if(namesUsed.indexOf(name) == -1)
					{
						var previousName = nickNames[socket.id];
						var previousNameIndex = namesUsed.indexOf(previousName);
						namesUsed.push(name);
						nickNames[socket.id] = name;
						delete namesUsed[previousNameIndex];
						socket.emit('nameResult',{
							success:true,
							name:name
						})
						socket.to(currentRoom[socket.id]).emit('message',{
							text:previousName+'现在的名字是'+name+'.'
						})
					}
					else{
						socket.emit('nameResult',{
							success:false,
							message:'昵称已经被占用'
						})
					}
				}
			})
	}
//发送聊天记录
function handleMessageBroadcasting(socket,nickNames){
	socket.on('message',function(message){
		socket.to(message.room).emit('message',{
			text:nickNames[socket.id]+':'+message.text
		})
	})
}
//创建房间
function handleRoomJoining(socket){
	socket.on('join',function(room){
		socket.leave(currentRoom[socket.id]);
		joinRoom(socket,room.newRoom);
	})
}
//用户断开连接
function handleClientDisconnection(socket,nickNames,namesUsed){
	socket.on('disconnect',function(){
		var nameIndex = namesUsed.indexOf(nickNames[socket.id]); //返回当前被使用名字的位置
		delete namesUsed[nameIndex]
		delete nickNames[socket.id]
	})
}


exports.startSocketServer = function(app){
		var server = require('http').createServer(app);
		var io = require('socket.io')(server);

		io.on('connection', function(socket){
			userCount = assignGuestName(socket,userCount,nickNames,namesUsed);

			joinRoom(socket,'疯狂马刺球迷区');

			handleMessageBroadcasting(socket,nickNames)//处理用户信息

			handleNameChangeAttempts(socket,nickNames,namesUsed)//更改用户名字

			handleRoomJoining(socket)//聊天室的创建和变更

			handleClientDisconnection(socket,nickNames,namesUsed)
	  });

		server.listen(app.get('port'), function() {
		  console.log('服务器的端口是:' + server.address().port);
		});

}
