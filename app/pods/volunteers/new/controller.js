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
      this.get('model').save().then((model) => {
        let message;
        this.transitionToRoute('volunteers.index');
        message = model.get('name');
        message = message + ' is registered successfully.';
        this.get('flashMessages').notifySuccess(message);
      });
    },
    cancel() {
      this.transitionToRoute('volunteers.index');
    }
  }
  ////////////////////////////////////////

});
