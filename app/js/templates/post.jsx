define(['react'], function(React) {
    var PostItemWrapper = React.createClass({

        render: function() {
            function createMarkup() { return {__html: this.props.data.content}; };
            return <div class="post">
                        <div class="post-title">{this.props.data.title}</div>
                        <div class="post-content" dangerouslySetInnerHTML={createMarkup.apply(this)}></div>
                    </div>;
        }
    });

    return PostItemWrapper;
});