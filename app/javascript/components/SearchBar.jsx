import React from 'react'

class SearchBar extends React.Component {

  handleChange = (e) => {
    e.target.value ? this.props.search(e.target.value) : this.props.search('')
  }

  render(){
    return (
      <div id='searchBar' className="">
        <input autoFocus
          className='search'
          type="text"
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
export default SearchBar
