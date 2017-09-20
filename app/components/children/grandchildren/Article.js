// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// This is the History component. It will be used to show a log of  recent searches.
var Article = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return {
      article: ""
     };
  },
  activateLasers: function(){
    this.setState({article:this.props.id})
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search History</h3>
        </div>
        <div className="panel-body text-center">

          {/* Here we use a map function to loop through an array in JSX */}
          {this.renderList()}
          
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Articles;
