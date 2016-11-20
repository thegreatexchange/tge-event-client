import BaseController from '../../controllers/base';
import Ember from 'ember';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  application: Ember.inject.service(),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  authorizations: Ember.computed('session.session.content.authenticated.authorizations.[]', function() {
    return this.get('session.session.content.authenticated.authorizations');
  }),

  isAdminAppAuthorized: Ember.computed('authorizations.[]', function() {
    return this.get('authorizations').includes('app_admin');
  }),
  isEventAppAuthorized: Ember.computed('authorizations.[]', function() {
    return this.get('authorizations').includes('app_event');
  }),
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
  ////////////////////////////////////////
});
