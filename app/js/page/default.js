define([
    'component/posts/posts',
    'component/post/post',
    'service/wpservice'
], function(Posts, Post, WPService) {

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
    }

});