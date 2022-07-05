
'use strict';

angular.
    module('login').
    component('login', {
        templateUrl: 'login/login.template.html',
        controller: function LoginController($scope, $http, $rootScope, $route) {
            $scope.credentials = {
                userId: '',
                userName: '',
                password: ''
            };

            $scope.login = () => {
                $http.get(`https://jsonplaceholder.typicode.com/users/${$scope.credentials.userId}`)
                    .then(
                        (response) => {
                            console.log(response.data.id);
                            console.log($scope.credentials.userId);
                            if (response.data.id == $scope.credentials.userId) {
                                // if (response.data.username == $scope.credentials.userName) {
                                alert(`Login successful for ${response.data.username}!`);
                                $rootScope.loginStatus = true;
                                $scope.credentials = {
                                    userId: '',
                                    userName: '',
                                    password: ''
                                };
                                window.location.href = "/#!/phones";
                            }
                        },
                        (error) => {
                            console.log(error);
                            alert(`Wrong credentials!`);
                            $rootScope.loginStatus = false;
                            $scope.credentials = {
                                userId: '',
                                userName: '',
                                password: ''
                            };
                            window.location.href = "/#!/login";
                        }

                    );
            }
        }
    });

