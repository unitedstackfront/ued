define(function(require) {

  'use strict';

  /**
   * Module dependencies
   */
  console.log('before load');
  var defineComponent = require('flight/lib/component');
  console.log('after load');

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