import React from 'react';
import PropTypes from 'prop-types';
import './ProjectResult.scss';

const ProjectResult = ({ id, type, name, description }) => {
  return (
    <div className='user-result'>
      <h1 className='title'>
        <span className='id'>#{id}</span> {name}
        <span className='id'>{` ${type}`}</span>
      </h1>
      <p className='bio'>{description}</p>
    </div>
  );
};

ProjectResult.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string
};

export default ProjectResult;
