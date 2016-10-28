import BaseRoute from '../../routes/base';

import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default BaseRoute.extend(
  ////////////////////////////////////////
  // Mixins
  ////////////////////////////////////////
  ApplicationRouteMixin,
  ////////////////////////////////////////

{
  ////////////////////////////////////////
  // Route Lifecycle
  ////////////////////////////////////////
  beforeModel(transition) {
    if (!this.get('session.isAuthenticated') && transition.targetName !== 'login') {
      return this.transitionTo('login');
    }
  },

  afterModel() {
    if (this.get('session.isAuthenticated')) {
      let promises= {
        schools:    this.store.findAll('school'),
        ministries: this.store.findAll('ministry'),
        events:     this.store.findAll('event')
      };

      return Ember.RSVP.hash(promises)
    } else {
      this.set('session.performSetupAfterValidation', true);
    }
  }
  ////////////////////////////////////////

});
