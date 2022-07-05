
'use strict';

angular.
    module('header').
    component('header', {
        templateUrl: 'header/header.template.html',
        controller: function HeaderController($scope, $rootScope) {
            $scope.isUserLoggedIn = $rootScope.loginStatus;
            console.log($scope.isUserLoggedIn);
        }
    });

