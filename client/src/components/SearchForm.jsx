import React from 'react';

const SearchForm = ({ submit, change }) => (
  <div>
    <form onSubmit={submit}>
      <input type="text" className="search-bar" onChange={change} placeholder="Search Users" />
      <button type="submit" className="submit-btn">
        Search
      </button>
    </form>
  </div>
);

export default SearchForm;
