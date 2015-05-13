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
            item: 'ul li a'
        });

        this.views = ['posts'];

        this.onPostsFetched = function(e, res) {
            this.d = res.result;
            Template.render(this.$node.get(0), res.result);
        };

        this.onItemClicked = function(e, obj) {
            var id = $(obj.el).data('id');
            var post = this.findItemByID(id);

            this.trigger(document, 'showPost', {
                "post": post
            });

            e.preventDefault();
        }

        this.after('initialize', function() {

            this.on(document, 'service.postsFetched', this.onPostsFetched);

            window.setTimeout((function() {
                this.trigger(document, 'service.fetchPosts');
            }).bind(this));

            this.on('click', {
                item: this.onItemClicked
            });

            this.onInitialize();
        });
    }

});