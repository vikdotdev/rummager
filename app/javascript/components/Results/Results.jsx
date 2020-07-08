import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import actions from '../../redux/actions';

import UserResult from './UserResult';
import ProjectResult from './ProjectResult';

import './Results.scss';

const Results = ({ results, loading, setSelectedResult }) => {
  const resultItems = !loading && results.data.map(result => {
    const key = `${result.type}-${result.id}`;

    switch(result.type) {
    case 'User':
      return (
        <UserResult
          key={key}
          result={result}
          setSelectedResult={setSelectedResult.bind(null, result.id)}
        />
      );
    case 'Project':
      return (
        <ProjectResult
          key={key}
          result={result}
          setSelectedResult={setSelectedResult.bind(null, result.id)}
        />
      );
    }
  });

  return (
    <div className='result-list'>
      { loading && <Loader type='TailSpin' color='#ddd' className='spinner' /> }
      { resultItems.length ? resultItems : !loading && <div>No results</div> }
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.object,
  loading: PropTypes.bool,
  setSelectedResult: PropTypes.func
};

const mapStateToProps = state => ({
  results: state.search.results,
  loading: state.search.loading
});

const mapDispatchToProps = dispatch => ({
  setSelectedResult: id => dispatch(actions.setSelectedResult(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Results));
