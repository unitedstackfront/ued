define(['flight/lib/component', 'mixin/base', 'jsx!component/post/template'], function(defineComponent, Base, Template) {

    'use strict';
    /**
     * Module exports
     */

    return defineComponent(Post, Base);

    /**
     * Module function
     */

    function Post() {
        this.attributes({
        });

        this.views = ['post'];

        this.doShowPost = function(e, o) {
            this.post = o.post;
            if (this.post) {
                Template.render(this.$node.get(0), this.post);

                this.trigger(document, 'viewChange', {
                    "currentView": "post"
                });
            }
        }

        this.after('initialize', function() {

            this.onInitialize();

            this.on(document, 'showPost', this.doShowPost);
        });
    }

});