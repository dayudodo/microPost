Router.configure({
	layoutTemplate:'layout',
	notFoundTemplate: 'notFound'
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