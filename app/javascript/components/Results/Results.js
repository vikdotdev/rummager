import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Results = ({ results, loading, history }) => {
  (!loading && results && !results.length) && history.push('/search');

  const resultItems = !loading && results.map((result, i) => {
    return (
      <div key={i}>
        <div>{result.id}</div>
        <div>{result.full_name}</div>
        <div>{result.description}</div>
      </div>
    );
  });

  return (
    <div>
      {resultItems}
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.array,
  loading: PropTypes.bool,
  history: PropTypes.object
};

export default withRouter(Results);
