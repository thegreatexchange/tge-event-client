import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login', { path: 'sign-in' });
  this.route('volunteers', function() {
    this.route('new');
  });
});

export default Router;
