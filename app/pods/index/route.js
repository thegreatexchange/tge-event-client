import BaseRoute from '../../routes/base';
import Ember     from 'ember';

export default BaseRoute.extend({

  ////////////////////////////////////////
  // Route Lifecycle
  ////////////////////////////////////////
  afterModel() {
    if (this.get('session.setupAfterAuthentication')) {
      this.set('session.setupAfterAuthentication', false);

      let promises= {
        schools:    this.store.findAll('school'),
        ministries: this.store.findAll('ministry'),
        events:     this.store.findAll('event')
      };

      return Ember.RSVP.hash(promises);
    }
  },
  setupController(controller, model) {
    var events;
    this._super(controller, model);
    events = this.store.peekAll('event');
    controller.set('events', events.sortBy('startsAt'));
  }
  ////////////////////////////////////////
});
