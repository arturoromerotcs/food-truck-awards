(function () {
	'use strict';
	angular
    .module('foodTruckApp')
    .controller('loginCtrl',

  function loginCtrl($scope, $log, $location, LoginService) {

  	//TODO centralize
   	if ($location.path() === '/login') {
		  LoginService.isLoggedIn();
		};
  	//

  	$scope.loginWithGoogle = function() {
  		LoginService.LoginWithGoogle();
  	}
	});
}());
