
'use strict';

angular.
    module('header').
    component('header', {
        templateUrl: 'header/header.template.html',
        controller: function HeaderController($scope) {
            $scope.message = "Welcome to header!";
        }
    });

