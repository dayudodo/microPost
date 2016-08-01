import { Meteor } from 'meteor/meteor';
import { Posts } from '/lib/collections.js'
import fs from 'fs'

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
  });
  // console.log(__dirname)
  UploadServer.init({
    tmpDir:  '/.uploads/tmp',
    uploadDir: '/.uploads/',
    checkCreateDirectories: true ,//create the directories for you,
    finished(fileInfo, formFields) {
          // fileInfo.extraData = new Date()
          console.log(formFields)
    }
  });


});
