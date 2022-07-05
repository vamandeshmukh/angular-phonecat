
'use strict';

angular.
    module('login').
    component('login', {
        templateUrl: 'login/login.template.html',
        controller: function LoginController($scope, $http) {

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
                                alert(`Login successful for ${response.data.username}!`);
                                $scope.credentials = {
                                    userId: '',
                                    userName: '',
                                    password: ''
                                };
                                window.location.href = "/#!/home";
                            }
                        },
                        (error) => {
                            console.log(error);
                            alert(`Wrong credentials!`);
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

