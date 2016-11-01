import BaseRoute from '../../../routes/base';

export default BaseRoute.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  typeKey:            'volunteer',
  unloadOnDeactivate: true,
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Route Lifecycle
  ////////////////////////////////////////
  model() {
    return this._createRecord({
      school: this.get('session.event.school'),
      ministry: this.get('session.event.ministry')
    });
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('schools',    this.store.peekAll('school'));
    controller.set('ministries', this.store.peekAll('ministry'));
  }
  ////////////////////////////////////////
});
