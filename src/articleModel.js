function ArticleModel() {
  this._today = new Date().toISOString().slice(0, 10);
}

ArticleModel.prototype.allHeadlines = function() {
  return fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=' + this._today)
    .then(res => res.json())
    .then(data => {
      return data.response.results.map((article) => {
        return {
          title: article.webTitle,
          id: article.id,
          url: article.apiUrl
        }
      });
    })
}
