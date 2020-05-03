import React from 'react';
import PropTypes from 'prop-types';
import './UserResult.scss';

const UserResult = ({ id, type, first_name, last_name, bio, setSelectedUser }) => {
  return (
    <div className='user-result' onClick={setSelectedUser}>
      <h1 className='title'>
        <span className='id'>#{id}</span> {first_name} {last_name}
        <span className='id'>{` ${type}`}</span>
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
  setSelectedUser: PropTypes.func
};

export default UserResult;
