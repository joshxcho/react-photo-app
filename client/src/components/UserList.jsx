import React from 'react';
import SearchForm from './SearchForm';

const UserList = ({ change, submit }) => (
  <div>
    <SearchForm change={change} submit={submit} />
  </div>
);

export default UserList;
