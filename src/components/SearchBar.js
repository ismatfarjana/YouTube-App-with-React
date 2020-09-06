import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='search-bar ui segment'>
        <div className='ui form'>
          <div className='field'>
            <label>Video search</label>
            <input type='text'></input>
          </div>
        </div>
      </div>
    );
    
  }
}

export default SearchBar; 