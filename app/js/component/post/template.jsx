define(['react', 'jsx!template/post'], function(React, PostTemplate) {

    var Post = {
        render: function(node, results) {
            React.render(<PostTemplate data={results} />, node);
        }
    }
    return Post;
})