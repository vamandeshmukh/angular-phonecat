
'use strict';

angular.
    module('login').
    component('login', {
        templateUrl: 'login/login.template.html',
        controller: function LoginController($scope) {
            $scope.credentials = {
                userName: '',
                password: '',
                confirmPassword: ''
            };
            $scope.login = () => {
                alert(`login successful for ${$scope.credentials.userName}!`);
            }
        }
    });

