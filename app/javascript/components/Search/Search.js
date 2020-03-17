import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Search = ({ keywords, updateInput, fetchUsers, history, location }) => {
  const dispatchInputValue = e => updateInput(e.target.value.split(' '));

  const search = () => {
    if (keywords.length) {
      fetchUsers(keywords);

      const path = '/results';
      location.pathname !== path && history.push(path);
    }
  };

  return (
    <>
      <input onChange={dispatchInputValue} />
      <button onClick={search}>Search</button>
      <div>{keywords.join(' ')}</div>
    </>
  );
};

Search.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  updateInput: PropTypes.func,
  fetchUsers: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(Search);
