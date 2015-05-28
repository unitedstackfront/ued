define(['react', 'marked', 'highlight'], function(React, marked, highlight) {
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
        highlight: function(code) {
            return highlight.highlightAuto(code).value;
        }
    });
    var PostItemWrapper = React.createClass({

        render: function() {
            function createMarkup() {
                return {
                    __html: marked(this.props.data.content)
                };
            };
            return <div className="post">
                        <div className="post-title">{this.props.data.title}</div>
                        <div className="post-content" dangerouslySetInnerHTML={createMarkup.apply(this)}></div>
                    </div>;
        }
    });

    return PostItemWrapper;
});