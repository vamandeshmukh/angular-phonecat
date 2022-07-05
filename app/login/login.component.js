
'use strict';

angular.
    module('login').
    component('login', {
        templateUrl: 'login/login.template.html',
        controller: function LoginController($scope, $http) {
            $scope.credentials = {
                userName: '',
                password: ''
            };
            $scope.login = () => {
                $http.post('app-data/app-users.json', $scope.credentials)
                    .then(() => {
                        alert(`login successful for ${$scope.credentials.userName}!`);
                    })
            }
        }
    });

