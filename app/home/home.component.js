
'use strict';

angular.
    module('home').
    component('home', {
        templateUrl: 'home/home.template.html',
        controller: function HomeController($scope) {
            $scope.message = "Welcome to home!";
        }
    });

