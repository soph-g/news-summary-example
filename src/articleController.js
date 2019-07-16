function ArticleController(articleModel, articleView) {
  this.model = articleModel;
  this.view = articleView;
}

ArticleController.prototype.updateDOM = function() {
  // ask Model to get data
  this.model.getHeadlines()
}
