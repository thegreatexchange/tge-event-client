import BaseController from '../../controllers/base';

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
