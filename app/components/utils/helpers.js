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
  saveArticle: function(id) {
    console.log("SAVE ADDRESS");
    return axios.get("/save/" + id);
  },
  axiosAPI: function(){
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931")
      .then(res => {
        console.log(res)
        return res
      });
  }
//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931
};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
