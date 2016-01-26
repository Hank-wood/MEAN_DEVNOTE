$(function(){
	var socket = io.connect();

		socket.on('connect', function(){
			 socket.on('sendMessage',function(msg){
			 	var date = new Date();
			 	var currTime = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
			 	+' '+date.getHours()+':'+date.getMinutes();
			 		$('.messageList').append($('<li></li>').text(currTime+' '+msg));
			})
		})
		
		$('#sendMsg').on('click',function(e){
				e.preventDefault();
			 	var clientMsg = $('input[name="message"]').val();
				socket.emit('sendMessage',clientMsg)
		})


})