import {Mongo} from 'meteor/mongo'

export const Posts = new Mongo.Collection('posts');
Posts.attachSchema(new SimpleSchema({
	body:{
		type: String,
		label:"内容",
		max:500
	},
	userId:{
		type: String,
		autoValue:function(){
			return Meteor.userId()
		}
	},
	username:{
		type: String,
		autoValue:function(){
			return Meteor.users.findOne({_id: this.userId}).username
		}
	},
	createdAt:{
		type: Date,
		label:"创建时间",
		defaultValue: new Date(),
	}
}))

this.Pages = new Meteor.Pagination(Posts,{
	perPage:15,
	sort:{ createdAt: -1},
	itemTemplate: 'post',
	availableSettings: {
	  perPage: true,
	  sort: true
	}
});

this.Posts = Posts
AdminConfig = { 
	adminEmails: ['	liange@gmail.com'], 
	collections: { 
		Posts: {}, 
	},
	autoForm: {
		omitFields: ['createdAt', 'updatedAt'] 
	},
}

Meteor.methods({
	'posts.update'(id, data){
		if (this.userId) {
			Posts.update( id, {$set:{body: data}} )
		}else{
			throw new Error('must logged in!')
		}

	},
	'posts.remove'(id){
		Posts.remove( id )
	},
})