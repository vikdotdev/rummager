import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Result from './Result';
import './Results.scss';

const Results = ({ results, loading }) => {
  const resultItems = !loading && results.data.map(data => {
    return (<Result key={data.id} {...data} />);
  });

  return (
    <div className='user-list'>
      { loading && <Loader type='TailSpin' color='#ddd' className='spinner' /> }
      { resultItems.length ? resultItems : !loading && <div>No results</div> }
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.object,
  loading: PropTypes.bool
};

export default withRouter(Results);
