import Ember from 'ember';

export default Ember.Component.extend({

  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  flashMessages: Ember.inject.service('flashMessages'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  classNames: ['padding-vertical-8'],
  messages: Ember.computed('flashMessages.messages.[]', function() {
    return this.get('flashMessages.messages');
  }),

  hasMessages: Ember.computed('messages.length', function() {
    return this.get('messages.length') > 0;
  })
  ////////////////////////////////////////

});
