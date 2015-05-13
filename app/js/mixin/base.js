define([], function() {

    /**
     * Module function
     */
    return Base;

    function Base() {

        this.onInitialize = function() {

            this.on(document, 'viewChange', this.onViewChange);
        };

        this.onViewChange = function(event, obj) {
            if (this.views) {
                if (this.views.indexOf(obj.currentView) < 0) {
                    this.$node.hide();
                } else {
                    this.$node.show();
                }
            }
        };

        this.findItemByID = function(id) {
            if (this.d && this.d instanceof Array) {
                for (var i = 0; i < this.d.length; i++) {
                    var o = this.d[i];
                    if (o.ID == id) {
                        return o;
                    }
                }
            }
        }
    }

});