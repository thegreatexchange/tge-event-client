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
      organization: this.get('session.event.organization'),
      eventId:      this.get('session.event.id')
    });
  },
  beforeAddObservers(controller, model) {
    this._super(controller, model);
    controller.set('organizations', this.store.peekAll('organization'));
  }
  ////////////////////////////////////////
});
