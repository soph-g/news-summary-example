function ArticleModel() {

}

ArticleModel.prototype.getHeadlines = function() {
  return fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?from-date=2019-07-01')
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
