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
      this.get('model').save().then(() => {
        this.transitionToRoute('volunteers.index');
      });
    },
    cancel() {
      this.transitionToRoute('volunteers.index');
    }
  }
  ////////////////////////////////////////

});
