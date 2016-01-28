$(function(){
//拓展js原生函数
	Date.prototype.getCurrentTime = Date.getCurrentTime||function(){
		var changeNumber = function(num){
			return num<10?'0'+num:num;
		}
		var currTime = this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()
		+' '+changeNumber(this.getHours())+':'+changeNumber(this.getMinutes());
		return currTime;
	}


var socket = io.connect();

		socket.on('connect', function(){
			 socket.on('sendMessage',function(msg){
			 	var date = new Date();
			 	$('.messageList').append($('<li></li>').text(
			 		date.getCurrentTime()+' '+msg.userName+':'+msg.body));
			})
		})

		socket.on('nameResult',function(msg){
			$('.messageList').append($('<li></li>').text('当前用户的名字是:'+msg.userName));
		})

		socket.on('disconnect',function(msg){
			$('.messageList').append($('<li></li>').text(msg));
		})
		
		$('input[name="message"]').keydown(function(event){
			event.stopPropagation();
			if(event.which==13){
				$('#sendMsg').trigger('click')
			}
		});

		$('#sendMsg').on('click',function(e){
			 	var clientMsg = $('input[name="message"]').val();
				socket.emit('sendMessage',clientMsg)
				$('input[name="message"]').val(' ')
		})


})