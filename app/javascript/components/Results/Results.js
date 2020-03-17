import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Results = ({ results, loading }) => {
  const resultItems = !loading && results.data.map(result => {
    return (
      <div key={result.id}>
        <div>{result.id}</div>
        <div>{result.first_name}</div>
        <div>{result.last_name}</div>
        <div>{result.bio}</div>
      </div>
    );
  });

  return (
    <div>
      {resultItems.length ? resultItems : <div>No results</div>}
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.object,
  loading: PropTypes.bool
};

export default withRouter(Results);
