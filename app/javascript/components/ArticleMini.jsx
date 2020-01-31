import React from 'react'

const ArticleMini = (props) => {

  const selectedArticle = props.data.find(({ url }) => url === props.url)

  return(
    <div id='article-mini'>
      <div className='article-info'>
        <img src={selectedArticle.urlToImage} alt=""/>
        <em>{selectedArticle.publishedAt.substr(0,10)}</em>
        <h3>{selectedArticle.title}</h3>
        <p>{ selectedArticle.content }</p>
      </div>
      <div className='buttons-mini'>

        <button className='btn btn-outline-secondary' onClick={()=>props.selected('')} >back to search</button>

        <button className='btn btn-outline-secondary'
          onClick={() => {props.addToAPI(
            selectedArticle.author,
            selectedArticle.content,
            selectedArticle.description,
            selectedArticle.publishedAt,
            selectedArticle.sourceName,
            selectedArticle.title,
            selectedArticle.url,
            selectedArticle.urlToImage
            )}}
          >add to favorite</button>

        <a className='btn btn-outline-secondary' href={props.url} target='_blank' >Visit</a>

      </div>
    </div>
  )
  // componentDidMount(){ console.log(props.title) }
}

export default ArticleMini
