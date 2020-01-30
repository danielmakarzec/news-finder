import React from 'react'

const ArticleMini = () => {

  return(
    <div>
      <h2>Article-mini</h2>
      <button className='btn' onClick={()=>props.addToAPI(props.article.source.name, props.article.title)}>add to favorite</button>
    </div>
  )
}

export default ArticleMini
