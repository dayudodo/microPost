import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Posts } from '/lib/collections.js'


import './main.html';

Meteor.subscribe('posts')
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
})

