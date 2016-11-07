import BaseController from '../../../controllers/base';
import Ember          from 'ember';

export default BaseController.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  confirmationEmail: null,

  isEmailConfirmed: Ember.computed('confirmationEmail', 'model.email', function() {
    if (this.get('model.email') && this.get('model.email') === this.get('confirmationEmail')) {
      return true;
    } else {
      return false;
    }
  }),

  isSaveDisabled: Ember.computed('isEmailConfirmed', function(){
    if (this.get('isEmailConfirmed')) {
      return false;
    } else {
      return true;
    }
  }),

  ministriesForSchool: Ember.computed('model.school.content', 'ministries.[]', function() {
    let school     = this.get('model.school.content'),
        ministries = this.get('ministries');
    if (school) {
      return ministries.filter((ministry) => {
        if (!ministry.get('schoolId') || ministry.get('schoolId') == school.get('id')) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return ministries;
    }
  }),

  resetProperties(){
    this.set('confirmationEmail', null);
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Actions
  ////////////////////////////////////////
  actions: {
    save() {
      if (this.get('isSaveDisabled')) {
        return;
      }
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
