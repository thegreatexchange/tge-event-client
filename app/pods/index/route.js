import BaseRoute from '../../routes/base';

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

      return Ember.RSVP.hash(promises)
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('events', this.store.peekAll('event'));
  }
  ////////////////////////////////////////
});
