import BaseController from '../../../controllers/base';
import Ember          from 'ember';

export default BaseController.extend({

  ////////////////////////////////////////
  // Dependencies
  ////////////////////////////////////////
  session: Ember.inject.service('session'),
  ////////////////////////////////////////

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
        _this.transitionToRoute('volunteers.index');
      });
    },
    cancel() {
      this.transitionToRoute('volunteers.index');
    }
  }
  ////////////////////////////////////////

});
