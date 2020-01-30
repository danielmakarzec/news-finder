import React from 'react'

import Article from './Article'

const ArticleList = (props) => {

  return (
    <div className='col-4'>
      {
        props.data.map((article, index) => {
        return <Article key={index} article={article} selected={props.selected} />
        })
      }
    </div>
  )
}

export default ArticleList
