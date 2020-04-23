import React from 'react';
import PropTypes from 'prop-types';
import './Result.scss';

const Result = ({ id, first_name, last_name, bio, setSelectedUser }) => {
  return (
    <div className='user-result' onClick={setSelectedUser}>
      <h1 className='title'>
        <span className='id'>#{id}</span> {first_name} {last_name}
      </h1>
      <p className='bio'>{bio}</p>
    </div>
  );
};

Result.propTypes = {
  id: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  bio: PropTypes.string,
  setSelectedUser: PropTypes.func
};

export default Result;
