function ArticleController(articleModel, articleView) {
  this.model = articleModel;
  this.view = articleView;
}

ArticleController.prototype.updateDOM = function() {
  // ask Model to get data and pass it to the view 
  this.model.getHeadlines()
    .then((headlines) => this.view.render(headlines))
}
