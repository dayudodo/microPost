import { Posts } from '/lib/collections.js'
import { Template } from 'meteor/templating'
import "./posts.html"


window.Posts= Posts


// Template.registerHelper("currentTime", function() {
	
// })

Template.posts.helpers({
	currentTime(){
		return new Date()
	},
	posts(){
		// return Posts.find({},{sort:{createdAt: -1}})
		return Posts.find().sort({createdAt: -1})
	}
})

Template.posts.events({
	'click .h1'(){
		console.log('hi, post')
	},
	'submit #myModal'(e, instance){
		console.log(e.target.body.value)
	},
	'keyup #postBody'(event, i){
		// console.log(e.keyCode)
		if (event.ctrlKey  &&  window.event.keyCode==13) {
			console.log('ctrl+enter')
			// 如何操作成submit?
			$('button[type=submit]').click()
		}
	},
})
