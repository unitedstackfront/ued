define(['flight/lib/component', 'mixin/base', 'jsx!component/posts/template'], function(defineComponent, Base, Template) {

    'use strict';
    /**
     * Module exports
     */

    return defineComponent(Posts, Base);

    /**
     * Module function
     */

    function Posts() {

        this.attributes({
            post: 'li'
        });


        this.views = ['posts'];

        this.onPostsFetched = function(e, res) {
            this.d = res.result;
            Template.render(this.$node.get(0), res.result);
            this.trigger(document, 'viewChange', {
                "currentView": "posts"
            });
        };

        this.after('initialize', function() {

            this.on(document, 'service.postsFetched', this.onPostsFetched);

            this.onInitialize();
        });
    }

});