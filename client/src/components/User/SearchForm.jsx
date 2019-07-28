import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ submit, change }) => (
  <div className="search-form">
    <form onSubmit={submit}>
      <input type="text" className="search-bar" onChange={change} placeholder="Search Users" />
      <button type="submit" className="submit-btn">
        Search
      </button>
    </form>
  </div>
);

export default SearchForm;

SearchForm.propTypes = {
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
