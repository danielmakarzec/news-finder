import React from 'react'

import FavArticle from './FavArticle'

class Favourite extends React.Component {
  constructor(){
    super()
    this.state = { favourite: [] }


    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    fetch('api/v1/articles.json')
      .then((res)=> {return res.json()})
      .then((data)=> {this.setState({favourite: data}) })
  }
// // // DELETE function // // //

  handleDelete(id){
    fetch(`api/v1/articles/${id}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => { this.deleteArticle(id) })
  }

  deleteArticle(id){
    let newState = this.state.favourite.filter((art) => art.id !== id)
    this.setState({
      favourite: newState
    })
  }

// // // // //



  render(){

    return (
      <div id='favourite'>
        {
          this.state.favourite
            .sort((a,b) => b.publishedAt.localeCompare(a.publishedAt) )
            .map((article) => {
              return <FavArticle key={article.id} article={article} delete={this.handleDelete}/> })
        }
      </div>
    )
  }
}

export default Favourite
