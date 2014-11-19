angular.module('app').service('ourService', function() {

    this.changeText = function(model) {
        model.text = "changed text";
        return model.text;
    };

});