import BaseRoute from '../../../routes/base';
import Ember from 'ember';

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
    _this = this;
    promises= {
      schools:    this.store.findAll('school'),
      ministries: this.store.findAll('ministry')
    };

    return Ember.RSVP.hash(promises).then(function(result) {
      _this.set('schools', result.schools.toArray());
      _this.set('ministries', result.ministries.toArray());
    });
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('schools',    this.get('schools'));
    controller.set('ministries', this.get('ministries'));
  }
  ////////////////////////////////////////
});
