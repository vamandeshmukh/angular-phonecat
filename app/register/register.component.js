
'use strict';

angular.
    module('register').
    component('register', {
        templateUrl: 'register/register.template.html',
        controller: function RegisterController($scope, $http) {

            $scope.credentials = {
                userId: '',
                userName: '',
                password: ''
            };

            $scope.register = () => {
                $http.post('https://jsonplaceholder.typicode.com/users', $scope.credentials).
                    then(
                        (response) => {
                            console.log(response.data);
                            alert(`Registration successful for ${response.data.userName}!`);
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

