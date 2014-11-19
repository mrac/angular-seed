describe('ourService', function() {


    it('should set the text of the model', function() {
        module('app');
        inject(function(ourService) {
            var model = {};
            expect(ourService.changeText(model)).toEqual('changed text');
            expect(model).toEqual({text: 'changed text'});

        });
    });
});
