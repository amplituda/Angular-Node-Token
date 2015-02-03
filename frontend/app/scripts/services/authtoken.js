'use strict';

angular.module('psJwtApp')
  .factory('authToken', function($window) {
    var storage = $window.localStorage;
    var cachedToken;
    var userToken = 'userToken';
    // Public API here
   
    var authToken = {
      setToken: function(token) {
        cachedToken = token;
        storage.setItem(userToken, token);
      },
      getToken: function() {
        if (!cachedToken) {
          cachedToken = storage.getItem(userToken);
        }

        return cachedToken;
      },
      isAuthenticated : function() {
        return !!authToken.getToken();
      },
      rmoveToken: function() {
        cachedToken = null;
        storage.removeItem(userToken);
      }
    };

    return authToken;
  });