describeComponent('component/post/post', function() {
    'use strict';

    // Initialize the component and attach it to the DOM
    beforeEach(function() {
        this.setupComponent();
    });

    it('should be defined', function() {
        expect(this.component).toBeDefined();
    });
    /*
    it('should be show', function() {
        var data = {
            "result": [{
                "ID": "2",
                "title": "Title"
            }]
        };

        $(document).trigger('service.postsFetched', data);
        expect(this.component).not.toBeHidden();
    });
    */

});