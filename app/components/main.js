// Include React
var React = require("react");

// Here we include all of the sub-components
/*var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");*/
var Articles = require("./children/Articles");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({
  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
/*    helpers.scrapeArticles().then(function(response) {
      console.log(response);
    }.bind(this));*/
    helpers.axiosAPI().then(response => console.log(response.data.response.docs));
  },
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">NYT React Scraper.</h2>
            <p className="text-center">
              <em>Save articles you like for later!</em>
            </p>
          </div>

          <div className="col-md-6">

            <Articles />

          </div>

          <div className="col-md-6">

            {/*<Results address={this.state.results} />*/}

          </div>

        </div>

        <div className="row">

          {/*<History history={this.state.history} />*/}

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
