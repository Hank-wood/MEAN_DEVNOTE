
var Chat = function(socket){
    this.socket = socket;
}
//用户发送消息
Chat.prototype.sendMessage = function(room,text){
    var message = {
      room:room,
      text:text
    }
    this.socket.emit('message',message)
};
//用户改变房间
Chat.prototype.changeRoom = function(room){
    this.socket.emit('join',{
        newRoom:room
    })
};

Chat.prototype.procssCommand = function(commond){
	var words = command.split(' ');
	var command = words[0].substring(1,words[0].length).toLowerCase();
	var message = false;
	switch(command){
		case 'join':
			words.shift(); //删除并返回第一个元素
			var room = words.join(' ');
			this.changeRoom(room);
			break;
		case 'nick':
			words.shift();
			var name = words.join(' ');
			this.socket.emit('nameAttempt',name)
			break;
		default:
			message = '无法识别的命令'
			break;
	}
	return message;
}







