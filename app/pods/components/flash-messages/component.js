import Ember from 'ember';

export default Ember.Component.extend({

  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  flashMessagesService: Ember.inject.service('flashMessages'),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  classNames: ['padding-vertical-8'],
  flashMessages: Ember.computed('flashMessagesService.messages.[]', function() {
    return this.get('flashMessagesService.messages');
  }),

  hasMessages: Ember.computed('flashMessages.length', function() {
    return this.get('flashMessages.length') > 0;
  })
  ////////////////////////////////////////

});
