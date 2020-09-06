import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

  onInputChange = event => {
    // console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    //parent component is told what the current state term is
    console.log(this.state.term);
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video search</label>
            <input 
              type='text'
              value={this.state.term}
              onChange={this.onInputChange} //this is a event callback function so it will be an array function up there
            />
          </div>
        </form>
      </div>
    );
    
  }
}

export default SearchBar; 