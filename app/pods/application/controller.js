import BaseController from '../../controllers/base';
import Ember          from 'ember';

export default BaseController.extend({
  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  session: Ember.inject.service('session'),
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
