import { Posts } from '/lib/collections.js'
import { ReactiveDict } from 'meteor/reactive-dict';

import './post.html'

Template.post.onCreated(function(){
	this.state= new ReactiveDict();
})

Template.post.events({
	'dblclick .post_body'(e, instance){
		console.log(this.body)
		// console.log($(e.target))
		instance.state.set('bodyValue', this.body)
		let updateInput = $(`<input type='text' value='${this.body}' class='update_post' name='body' size='60'/>`)
		$(e.target).html(updateInput)
		updateInput.focus()
		updateInput.select()
	},
	'keyup .update_post'(e){
		if (e.keyCode == 13) {
			console.log(e.target.value)
			// Posts.update(this._id, e.target.value)
			Meteor.call('posts.update', this._id, e.target.value)
			$(e.target).remove()
		}
		if (e.keyCode == 27) {
			let instance = Template.instance()
			let bodyvalue = instance.state.get('bodyValue')
			$(e.target).parent().html(bodyvalue)
		}
	},
	'click .update'(e, i){
		let post_body = $(e.target).siblings().filter('.post_body')
		post_body.trigger('dblclick')
	},
	'click .remove'(e){
		if (confirm('确实要删除么？')) {
			Meteor.call('posts.remove', this._id)
		}
	}
})