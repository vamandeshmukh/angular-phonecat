
'use strict';

angular.
    module('login').
    component('login', {
        templateUrl: 'login/login.template.html',
        controller: function LoginController() {
            this.message = "Welcome to login page!";
            this.credentials = {
                userName: '',
                password: '',
                confirmPassword: ''
            }

        }
    });

