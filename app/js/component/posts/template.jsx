define(['react'], function(React) {

    var Template = React.createClass({
        render: function() {
            return <div>ABC</div>;
        }
    });

    var Posts = {
        render: function(node) {
            React.render( <Template /> , node);
        }
    }
    return Posts;
})