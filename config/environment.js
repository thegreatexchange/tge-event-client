/* jshint node: true */
module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'myapp',
    podModulePrefix: 'myapp/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token'
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: '/authenticate/',
    identificationField: 'email',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    // headers: {},
    // refreshAccessTokens: true,
    // serverTokenRefreshEndpoint: '/api/token-refresh/',
    tokenExpireName: 'exp',
    // refreshLeeway: 0,
    // timeFactor: 1  // example - set to "1000" to convert incoming seconds to milliseconds.
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.rootURL = '/event/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'staging') {
    ENV.rootURL = '/event/'
  }

  if (environment === 'production') {
    ENV.rootURL = '/event/'
  }

  return ENV;
};
