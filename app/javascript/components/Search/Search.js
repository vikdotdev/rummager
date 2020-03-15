import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ keywords, updateInput, fetchUsers }) => {
  const dispatchInputValue = e => updateInput(e.target.value.split(' '));

  return (
    <>
      <input onChange={dispatchInputValue} />
      <button onClick={() => fetchUsers(keywords)}>Search</button>
    </>
  );
};

Search.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  updateInput: PropTypes.func,
  fetchUsers: PropTypes.func
};

export default Search;
