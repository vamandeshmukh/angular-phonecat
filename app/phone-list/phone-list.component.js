

'use strict';

angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: function PhoneListController($http) {
            var self = this;
            self.orderProp = 'age';

            // syntax 
            // $http.get('reqtest url') .then( 'process the response') .catch('error');

            // also, axios in Angular 

            $http.get('phones/phones.json').then(function (response) {
                // console.log(response.data);
                self.phones = response.data;
            });
            // $http.
        }
    });



// 'use strict';
// // Register `phoneList` component, along with its associated controller and template
// angular.
//     module('phoneList').
//     component('phoneList', {
//         templateUrl: 'phone-list/phone-list.template.html',
//         // template: "<p>some {{ 10 + 10 }} html<p>",
//         controller: function PhoneListController() {
//             this.phones = [
//                 {
//                     name: 'Nexus S',
//                     snippet: 'Fast just got faster with Nexus S.'
//                 }, {
//                     name: 'Motorola XOOM™ with Wi-Fi',
//                     snippet: 'The Next, Next Generation tablet.'
//                 }, {
//                     name: 'MOTOROLA XOOM™',
//                     snippet: 'The Next, Next Generation tablet.'
//                 }
//             ];
//         }
//     });