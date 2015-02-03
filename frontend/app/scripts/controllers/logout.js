'use strict';

angular.module('psJwtApp')
  .controller('LogoutCtrl', function (authToken, $state) {
    authToken.rmoveToken();
    $state.go('main');
  });