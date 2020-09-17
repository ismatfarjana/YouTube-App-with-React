import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = event => {
    setTerm(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange} //this is a event callback function so it will be an array function up there
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
