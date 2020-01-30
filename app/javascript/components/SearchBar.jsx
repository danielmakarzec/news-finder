import React from 'react'

class SearchBar extends React.Component {

  handleChange = (e) => {
    e.target.value ? this.props.search(e.target.value) : this.props.search('')
  }

  render(){
    return (
      <div className="searchBar col-8">
        <input
          className='search'
          type="text"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
export default SearchBar
