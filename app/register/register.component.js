
'use strict';

angular.
    module('register').
    component('register', {
        templateUrl: 'regist/regist.template.html',
        controller: function RegistController($scope) {
            $scope.message = "Welcome to register!";
        }
    });

