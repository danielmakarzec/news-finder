import React from 'react'

class Article extends React.Component {
  constructor(){
    super()
  }

  handleClick = () => {
    this.props.selected(this.props.article.url)
  }

  render(){
    return (
      <li onClick={this.handleClick} className='article' >
        <span className='text-primary'>{this.props.article.source.name}</span>
        <p>{this.props.article.title}</p>
      </li>
    )
  }
}

export default Article
