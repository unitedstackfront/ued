define([
    'flight/lib/component'
], function(defineComponent) {
    'use strict';

    function stats() {

        this.doFetchPost = function(event, o) {
            var xhr = $.getJSON('http://ued.ustack.com/wordpress/wp-json/posts/' + o.id);

            xhr.done(this.onPostFetched.bind(this));
        };

        this.doFetchPosts = function() {
            var xhr = $.getJSON('http://ued.ustack.com/wordpress/wp-json/posts');

            xhr.done(this.onPostsFetched.bind(this));
        };

        this.onPostFetched = function(res) {
            this.trigger(document, 'service.postFetched', {
                "post": res
            });
        }

        this.onPostsFetched = function(res) {
            this.trigger(document, 'service.postsFetched', {
                "result": res
            });
        };

        this.after('initialize', function() {
            this.on(document, 'service.fetchPosts', this.doFetchPosts);
            this.on(document, 'service.fetchPost', this.doFetchPost);
        });
    }

    return defineComponent(stats);
});