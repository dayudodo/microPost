import { Meteor } from 'meteor/meteor';
import { Posts } from '/lib/collections.js'

Meteor.startup(() => {
  Meteor.publish('posts',function(){
  	return Posts.find();
  });
  Posts.allow({
  	insert: function(){
  		return true;
  	},
  	update: function(){
  		return true;
  	},
  	remove: function(){
  		return true;
  	}
  })

});
