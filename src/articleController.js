function ArticleController(articleModel, articleView) {
  this.model = articleModel;
  this.view = articleView;
}

ArticleController.prototype.updateDOM = function() {
  this.model.getHeadlines()
    .then((headlines) => {
      document.getElementById('app').innerHTML = this.view.render(headlines)
    });
}
