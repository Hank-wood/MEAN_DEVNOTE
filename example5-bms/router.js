exports.setRequestUrl = (app) => {

	app.get('/',(req,res) => {
	  res.render('pages/login/login',{
	  	title:'请登陆'
	  })
	})
}