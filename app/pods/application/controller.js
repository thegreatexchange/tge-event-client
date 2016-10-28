import BaseController from '../../controllers/base';
import Ember          from 'ember';

export default BaseController.extend({
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
