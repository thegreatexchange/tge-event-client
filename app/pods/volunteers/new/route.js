import BaseRoute from '../../../routes/base';

export default BaseRoute.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  typeKey:            'person',
  unloadOnDeactivate: true,
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Route Lifecycle
  ////////////////////////////////////////
  model() {
    return this._createRecord();
  },

  afterModel() {
    var promises, _this;
    promises= {
      schools:    this.store.findAll('school'),
      ministries: this.store.findAll('ministry'),
      events:     this.store.findAll('event')
    };

    return Ember.RSVP.hash(promises).then((result) => {
      this.set('schools', result.schools.toArray());
      this.set('ministries', result.ministries.toArray());
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('schools',    this.get('schools'));
    controller.set('ministries', this.get('ministries'));
  }
  ////////////////////////////////////////
});
