import React from 'react';
import PropTypes from 'prop-types';

import { highlightFor } from '../../util/highlight';

import './UserResult.scss';

const UserResult = ({ result, setSelectedResult }) => {
  const { id, type, bio } = result;

  return (
    <div className='user-result' onClick={setSelectedResult}>
      <h1 className='title'>
        <span className='id'>#{id}</span>
        <span className="name">
          {highlightFor({ result, field: 'first_name' })} {highlightFor({ result, field: 'last_name' })}
        </span>
        <span className='type'>{type}</span>
      </h1>
      <p className='bio'>{bio}</p>
    </div>
  );
};

UserResult.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  bio: PropTypes.string,
  setSelectedResult: PropTypes.func
};

export default UserResult;
