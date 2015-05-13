define(['react'], function(React) {

    var ListItemWrapper = React.createClass({
        render: function() {
            return <li key={this.props.data.ID}><a data-id={this.props.data.ID} href="javascript:;">{this.props.data.title}</a></li>;
        }
    });

    return ListItemWrapper;
});