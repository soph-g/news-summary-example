function ArticleController(articleModel, articleView) {
  this.model = articleModel;
  this.view = articleView;
}

ArticleController.prototype.getHeadlines = function(domElement) {
  this.model.allHeadlines()
    .then((headlines) => {
      domElement.innerHTML = this.view.render(headlines)
    });
}
