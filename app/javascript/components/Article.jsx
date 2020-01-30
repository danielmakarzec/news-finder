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
        <span>{this.props.article.source.name}</span>
        <span>{this.props.article.title}</span>
      </li>
    )
  }
}

export default Article
