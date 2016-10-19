import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save() {

    },
    cancel() {
      this.transitionToRoute('index');
    }
  }
});
