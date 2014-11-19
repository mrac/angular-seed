angular.module('app').directive('multiInput', function() {

    return {
        restrict: 'E',
        scope: {
            array: '='
        },
        templateUrl: 'multi-input.html',
        link: function(scope, element, attrs) {

        }
    };

});
