$(function(){
	var socket = io.connect();
		 socket.on('hello', function(msg){
		 		console.log(msg.data)
		 		socket.emit('message',{ data:'来啦',id:msg.id});
		 });
})