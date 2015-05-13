define([
    'component/posts/posts',
    'component/post/post',
    'service/wpservice',
    'service/router'
], function(Posts, Post, WPService, RouterService) {

    'use strict';
    /**
     * Module exports
     */

    return initialize;

    /**
     * Module function
     */

    function initialize() {
        Posts.attachTo('#pagePost');
        Post.attachTo('#pagePostSingle');
        WPService.attachTo(document);
        RouterService.attachTo(document);
    }

});