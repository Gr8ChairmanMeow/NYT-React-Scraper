// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper Functions (in this case the only one is runQuery)
var helpers = {
  getArticles: function() {
    return axios.get("/articles");
  },
  // Returns a promise object we can .then() off inside our Parent component
  scrapeArticles: function() {
    return axios.get("/scrape");
  },
  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  saveAddress: function(addressData) {
    console.log("SAVE ADDRESS");
    return axios.post("/api", addressData);
  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
