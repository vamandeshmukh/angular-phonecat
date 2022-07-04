





// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', 
function PhoneListController($scope) {
    $scope.phones = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
    $scope.myName = "Vaman Deshmukh";
    $scope.empData = {
        eid: 101,
        firstName: 'Sonu',
        salary: 10.5,
        address: { city: 'Hyderabad', pin: 500001 },
        phones: [9876543210, 7894561230]
    };

});