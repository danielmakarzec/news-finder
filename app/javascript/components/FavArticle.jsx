import React from 'react'

const FavArticle = (props) => {

  const article = props.article
  return (
    // console.log(article),
    <div className='fav-article-card' >
      <div className="shadow">
        <div className="card-front">
          <div className="img" style={{backgroundImage: 'url(' + article.urlToImage + ')'}}></div>
          <div className="card-text">
            <em>{article.publishedAt.substr(0,10)}</em>
            <span className='source'>{article.sourceName}</span>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        </div>
      </div>
      <div className="card-back">
        <div className="delete-box">
           <a href="#" onClick={() => props.delete(article.id)}>delete</a>
        </div>
        <div className="link-box">
          <a href={article.url} className='link-box' target='_blank'>></a>
        </div>
      </div>
    </div>
  )

}

export default FavArticle
