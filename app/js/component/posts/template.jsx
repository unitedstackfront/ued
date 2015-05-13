define(['react', 'jsx!template/posts'], function(React, PostTemplate) {

    var Template = React.createClass({
        render: function() {
            return (
                <ul>
                    {this.props.results.map(function(result) {
                        return <PostTemplate key={result.ID} data={result} />;
                    })}
                </ul>
            );
        }
    });

    var Posts = {
        render: function(node, results) {
            React.render( <Template results={results} /> , node);
        }
    }
    return Posts;
})