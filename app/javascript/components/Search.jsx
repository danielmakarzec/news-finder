import React from 'react'

import SearchBar from './SearchBar'
import ArticleMini from './ArticleMini'
import ArticlesList from './ArticlesList'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      selectedArticleUrl: '',
      searchData: [],
      favourites: []
    }
    this.addToAPI = this.addToAPI.bind(this)
  }

// // component Did Mount \\

  // componentDidMount(){
  //   fetch('api/v1/fruits.json')
  //     .then((response) => {return response.json()})
  //     .then((data) => {this.setState({ fruits: data }) });
  // }


// // Function fetches external API data // // //

  search = (query) => {
    const API_KEY = '347763cf203e46bba93e258fd536e238';
    const QUERY = query
    const API_URL = `https://newsapi.org/v2/everything?q=${QUERY}&from=2021-08-01&sortBy=popularity&apiKey=${API_KEY}`;

    fetch(API_URL)
      .then(res => res.json())
      .then(res => {
        res.status === 'error' ?
          this.setState({ searchData: [] }) :
          this.setState({ searchData: res.articles })
      })
  }

// //  Function updates State.selectedArticleURL from Article Component // // // // // //

  selected = (url) => {
    this.setState({
      selectedArticleUrl: url
    });
  }

// // Function adds Article to the local API // // // //

  addToAPI = (author, content, description, publishedAt, sourceName, title, url, urlToImage) => {
    fetch('api/v1/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({article: {
        author: author,
        content: content,
        description: description,
        publishedAt: publishedAt,
        sourceName: sourceName,
        title: title,
        url: url,
        urlToImage: urlToImage
        } })
    })
    .then((response) => {return response.json() })

  }

// // // // // // // // //

  render(){
    return (
      <div id='search'>
        {
          this.state.selectedArticleUrl ?
          <ArticleMini url={this.state.selectedArticleUrl} data={this.state.searchData} selected={this.selected} addToAPI={this.addToAPI} />
          :
          <SearchBar search={this.search}/>
        }
        <ArticlesList data={this.state.searchData} selected={this.selected}/>
      </div>
    )
  }
}

export default Search
