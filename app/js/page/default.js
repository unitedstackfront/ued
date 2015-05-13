define(['component/posts/posts'], function(Posts) {

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
  }

});