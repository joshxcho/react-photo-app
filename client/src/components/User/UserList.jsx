import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

const UserList = ({ change, submit }) => (
  <div className="user-list-container">
    <SearchForm change={change} submit={submit} />
  </div>
);

export default UserList;

UserList.propTypes = {
  change: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
