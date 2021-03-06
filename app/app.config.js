'use strict';

angular.
    module('phonecatApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/home', {
                    template: '<home></home>'
                }).
                when('/phones', {
                    template: '<phone-list></phone-list>'
                }).
                when('/login', {
                    template: '<login></login>'
                }).
                when('/header', {
                    template: '<header></header>'
                }).
                when('/register', {
                    template: '<register></register>'
                }).
                when('/', {
                    template: '<home></home>'
                }).
                otherwise('/');
        }
    ]);