import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <div onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video search</label>
            <input 
              type='text'
              value={this.state.term}
              onChange={this.onInputChange} //this is a event callback function so it will be an array function up there
            />
          </div>
        </div>
      </div>
    );
    
  }
}

export default SearchBar; 