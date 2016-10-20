import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(
  ////////////////////////////////////////
  // Mixins
  ////////////////////////////////////////
  AuthenticatedRouteMixin,
  ////////////////////////////////////////
{
  ////////////////////////////////////////
  // Properties
  ////////////////////////////////////////
  typeKey:            null,
  unloadOnDeactivate: false,
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Route Lifecycle
  ////////////////////////////////////////
  deactivate() {
    this.get('controller').resetProperties();
    if (this.get('typeKey') && this.get('unloadOnDeactivate')) {
      this.store.unloadAll(this.get('typeKey'));
    }
  },
  ////////////////////////////////////////

  ////////////////////////////////////////
  // Private
  ////////////////////////////////////////
  _createRecord(params){
    return this.store.createRecord(this.get('typeKey'), params);
  }
  ////////////////////////////////////////
});
