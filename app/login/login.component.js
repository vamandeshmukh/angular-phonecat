
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
                $http.post('https://jsonplaceholder.typicode.com/users', $scope.credentials).
                    then(
                        (response) => {
                        console.log(response.data);
                        alert(`login successful for ${response.data.userName}!`);
                    }
                    );
            }
        }
    });

