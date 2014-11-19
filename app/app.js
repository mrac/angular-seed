angular.module('app', ['ngRoute']);


angular.module('app').config(function($routeProvider) {

    $routeProvider.when('/main', {
        controller: 'MyCtrl',
        templateUrl: 'my.html'
    });

});