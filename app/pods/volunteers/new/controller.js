import BaseController from '../../../controllers/base';
import Ember          from 'ember';

export default BaseController.extend({

  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  confirmationEmail:              null,
  isTextEnabledCheckBoxDisabled:  true,
  isEmailEnabledCheckBoxDisabled: true,

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

  resetProperties() {
    this.set('confirmationEmail',              null);
    this.set('isTextEnabledCheckBoxDisabled',  true);
    this.set('isEmailEnabledCheckBoxDisabled', true);
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Computed Display Properties
  ////////////////////////////////////////
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
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Observers
  ////////////////////////////////////////
  addObservers() {
    this.addObserver('model.phoneNumber', this, this._updateIsTextEnabled);
    this.addObserver('isEmailConfirmed',  this, this._updateIsEmailEnabled);
  },

  removeObservers() {
    this.removeObserver('model.phoneNumber', this, this._updateIsTextEnabled);
    this.removeObserver('isEmailConfirmed',  this, this._updateIsEmailEnabled);
  },

  _updateIsTextEnabled() {
    if (this.get('model.phoneNumber')) {
      this.set('model.isTextEnabled',           true);
      this.set('isTextEnabledCheckBoxDisabled', false);
    } else {
      this.set('model.isTextEnabled',           false);
      this.set('isTextEnabledCheckBoxDisabled', true);
    }
  },

  _updateIsTextEnabled() {
    if (this.get('isEmailConfirmed')) {
      this.set('model.isEmailEnabled',           true);
      this.set('isEmailEnabledCheckBoxDisabled', false);
    } else {
      this.set('model.isEmailEnabled',           false);
      this.set('isEmailEnabledCheckBoxDisabled', true);
    }
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
