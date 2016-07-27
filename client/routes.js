Router.configure({
	layoutTemplate:'layout'
})

Router.route('/',function(){
	this.render('posts')
})

Router.route('/posts',function(){
	this.render('posts')
})

Router.route('/about',function(){
	this.render('about')
})