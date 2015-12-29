var socket = io();
  $('form').submit(function(){
    socket.emit('chatMessage',$('#m').val());
    $('#m').val('');
    return false;
  });

  socket.on('chatMessage', function(msg){
    $('#messages').append($('<li>').text(msg.userName + ': ' + msg.body));
  });

  socket.on('bye', function(userName) {
  $('#messages').append($('<li>').text('用户' + userName + ' 离开!'));
  });

