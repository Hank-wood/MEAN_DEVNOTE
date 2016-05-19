
$('#login-in').on('click',function(){
  		var param = {};
	   	   param.userAccout = $('input[name="userAt"]').val();
	   	   param.userPassword = $('input[name="passWord"]').val();
	  	var data = JSON.stringify(param)
  		 $.ajax({
	         type:'POST',
	         url:'/login',
	         data: {param:data},
	         datatype:'json',
	         }).done(function(data){
	         	console.log(data)
	         }).fail(function(){
     		console.log('服务器异常')
	         })
  })
