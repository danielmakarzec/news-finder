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

// component Did Mount \\

  // componentDidMount(){
  //   fetch('api/v1/fruits.json')
  //     .then((response) => {return response.json()})
  //     .then((data) => {this.setState({ fruits: data }) });
  // }


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

// // Selected function // // // // // //

  selected = (url) => {
    this.setState({
      selectedArticleUrl: url
    });
  }

// // // // // //

  render(){
    return (
      <div className='d-flex'>
        { this.state.selectedArticleUrl ? <ArticleMini /> : <SearchBar search={this.search}/> }
        <ArticlesList data={this.state.searchData} selected={this.selected}/>
      </div>
    )
  }
}

export default Search
