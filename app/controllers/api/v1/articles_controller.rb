class Api::V1::ArticlesController < ActionController::Base
  skip_before_action :verify_authenticity_token
  def index
    render json: Article.all
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  def create
    article = Article.create(article_params)
    render json: article
  end

  def destroy
    article = Article.find(params[:id])
    article.destroy
  end

  private

  def article_params
    params.require(:article).permit(
      :author,
      :content,
      :description,
      :publishedAt,
      :sourceName,
      :title,
      :url,
      :urlToImage
    )
  end
end
