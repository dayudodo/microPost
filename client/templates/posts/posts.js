import { Posts } from '/lib/collections.js'
import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict';

import "./posts.html"
import moment from 'moment'

window.Posts= Posts
window.moment = moment


// Template.registerHelper("currentTime", function() {
	
// })
// Template.posts.created=function(){
// 	Uploader.init(this)
// }
// Template.posts.rendered = function(){
// 	Uploader.render.call(this)
// }
Template.posts.onCreated(function(){
	this.state= new ReactiveDict();
})

Template.posts.helpers({
	myCallbacks: function() {
		let that = this
	  return {
	      finished: function(index, fileInfo, context) { 
	      	console.log(fileInfo)
	      	let value=$('#postBody').val()
	      	Meteor.call('posts.insert', value, fileInfo.url)
	      	// let instance = Template.instance()
	      	// instance.state.set('fileInfo', fileInfo)
	      },
	  }
	},
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
		// console.log(e.target.body.value)
		console.log(instance.get('fileInfo'))
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
