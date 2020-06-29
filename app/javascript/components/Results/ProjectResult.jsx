import React from 'react';
import PropTypes from 'prop-types';

import { highlightFor } from '../../util/highlight';

import './ProjectResult.scss';

const ProjectResult = ({ result, setSelectedResult }) => {
  const { id, type, description } = result;

  return (
    <div className='user-result' onClick={setSelectedResult}>
      <h1 className='title'>
        <span className='id'>#{id}</span>
        {highlightFor({ result, field: 'name' })}
        <span className='type'>{type}</span>
      </h1>
      <p className='bio'>{description}</p>
    </div>
  );
};

ProjectResult.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  setSelectedResult: PropTypes.func
};

export default ProjectResult;
