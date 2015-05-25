define(['react'], function(React) {
    var PostItemWrapper = React.createClass({

        render: function() {
            function createMarkup() { return {__html: this.props.data.content}; };
            return <div className="post">
                        <div className="post-title">{this.props.data.title}</div>
                        <div className="post-content" dangerouslySetInnerHTML={createMarkup.apply(this)}></div>
                    </div>;
        }
    });

    return PostItemWrapper;
});