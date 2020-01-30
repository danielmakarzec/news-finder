import React from 'react'

import SearchBar from './SearchBar'
import ArticleMini from './ArticleMini'
import ArticlesList from './ArticlesList'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedArticleUrl: '',
      searchData: []
    }
  }

// SEARCH Function \\

  search = (query) => {
    const API_KEY = '347763cf203e46bba93e258fd536e238';
    const QUERY = query
    const API_URL = `https://newsapi.org/v2/everything?q=${QUERY}&from=2020-01-27&sortBy=popularity&apiKey=${API_KEY}`;

    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        res.status === 'error' ?
          this.setState({ searchData: [] }) :
          this.setState({ searchData: res.articles })
      })
  }
// // // // // // // // // // // //

  render(){
    return (
      <div className='d-flex'>
        { this.state.selectedArticleUrl ? <ArticleMini /> : <SearchBar search={this.search}/> }
        <ArticlesList />
      </div>
    )
  }
}

export default Search
