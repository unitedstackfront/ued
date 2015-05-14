define([
    'flight/lib/component',
    'director'
], function(defineComponent, Router) {
    'use strict';

    function RouterService() {

        this.gotoPost = function(id) {
            this.trigger(document, 'service.fetchPost', {
                "id": id
            });
        };
        this.gotoPosts = function(id) {
            this.trigger(document, 'service.fetchPosts');
        };

        this.after('initialize', function() {
            this.routers = {
                '/post/:id': this.gotoPost.bind(this),
                '/posts': this.gotoPosts.bind(this),
                '/': this.gotoPosts.bind(this)
            };

            this.router = Router(this.routers);

            this.router.init();

        });
    }

    return defineComponent(RouterService);
});