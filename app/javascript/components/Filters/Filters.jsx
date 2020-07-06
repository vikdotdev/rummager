import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../redux/actions';

import RangeFilter from './RangeFilter';

const Filters = ({ results, loading }) => {
  return (
    <div className='card p-4'>
      <RangeFilter />
    </div>
  );
};

const mapStateToProps = state => ({
  results: state.search.results,
  loading: state.search.loading,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
