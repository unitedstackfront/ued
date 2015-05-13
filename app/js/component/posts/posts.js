define(['flight/lib/component', 'jsx!component/posts/template'], function(defineComponent, Template) {

  'use strict';

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
      Template.render(this.$node.get(0));
    });
  }

});