import BaseController from '../../../controllers/base';

export default BaseController.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  confirmationEmail: null,

  resetProperties(){
    this.set('confirmationEmail', null);
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save() {
      var _this = this;
      this.get('model').save().then(function() {
        _this.transitionToRoute('index');
      });
    },
    cancel() {
      this.transitionToRoute('index');
    }
  }
  ////////////////////////////////////////

});
