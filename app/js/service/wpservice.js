define([
    'flight/lib/component'
], function(defineComponent) {
    'use strict';

    function stats() {

        this.doFetchPosts = function() {
            var xhr = $.getJSON('http://ued.ustack.com/wordpress/wp-json/posts');

            xhr.done(this.onPostsFetched.bind(this));
        };

        this.onPostsFetched = function(res) {
            this.trigger(document, 'service.postsFetched', {
                "result": res
            });
        };

        this.after('initialize', function() {
            this.on(document, 'service.fetchPosts', this.doFetchPosts)
        });
    }

    return defineComponent(stats);
});