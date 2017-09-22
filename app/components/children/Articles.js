// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

var Article = require("./grandchildren/Article");

// This is the History component. It will be used to show a log of  recent searches.
var Articles = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { articles: [] };
  },

  componentDidMount: function() {
    // Get the latest history.
    helpers.getArticles().then(function(response) {
      //console.log(response);
/*      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }*/

      this.setState({ articles:response.data });

    }.bind(this));
  },/*
  activateLasers: function(){
    console.log("MAH LAZERZ!")
  },*/
  renderList: function() {
    return this.state.articles.map(function(article, i) {
      //console.log(typeof i);
      return (
        //<p key={i} className="thisArticle" onClick={this.activateLasers}>{article.title}</p>
        <Article id={article._id} title={article.title} />
      );
    }.bind(this))
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Articles</h3>
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
