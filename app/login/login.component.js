
'use strict';

angular.
    module('login').
    component('login', {
        templateUrl: 'login/login.template.html',
        controller: function LoginController() {
            this.loginDetails = {
                userName: '',
                password: '',
                confirmPassword: ''
            }

        }
    });

