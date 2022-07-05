
'use strict';

angular.
    module('register').
    component('register', {
        templateUrl: 'register/register.template.html',
        controller: function RegisterController($scope) {
            $scope.message = "Welcome to register!";
        }
    });

