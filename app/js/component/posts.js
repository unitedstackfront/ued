define(function(require) {

  'use strict';

  /**
   * Module dependencies
   */
  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(posts);

  /**
   * Module function
   */

  function posts() {
    this.attributes({

    });

    this.after('initialize', function() {

    });
  }

});