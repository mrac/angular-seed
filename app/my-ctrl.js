
angular.module('app').controller('MyCtrl', function($scope, ourService) {
    $scope.model = {
        isVisible: true,
        otherArray: [{
            text: 'one'
        }, {
            text: 'two'
        }]
    };


    $scope.$watch('model.isVisible', function(isVisible) {
        ourService.changeText($scope.model);
    });

});