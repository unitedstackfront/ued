describeComponent('component/posts/posts', function() {
    'use strict';

    // Initialize the component and attach it to the DOM
    beforeEach(function() {
        this.setupComponent();
    });

    it('should be defined', function() {
        expect(this.component).toBeDefined();
    });

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

    it('should have two items', function() {
        var data = {
            "result": [{
                "ID": "2",
                "title": "Title 1"
            }, {
                "ID": "3",
                "title": "Title 2"
            }]
        };
        $(document).trigger('service.postsFetched', data);
        expect(this.component.select('post').length).toBe(2);
    });

});