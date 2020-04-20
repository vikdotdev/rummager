import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Search.scss';

const Search = ({ keywords, updateInput, fetchUsers, history, location }) => {
  const dispatchInputValue = e => updateInput(e.target.value.split(' '));

  const search = () => {
    if (keywords.length) {
      fetchUsers();

      const path = '/results';
      location.pathname !== path && history.push(path);
    }
  };

  return (
    <>
      <div className='grid input-with-button-right'>
        <input
          type='search'
          onChange={dispatchInputValue}
          onKeyPress={e => e.key == 'Enter' && search()}
        />
      <button className='two columns' onClick={search}>Search</button>
      </div>
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
