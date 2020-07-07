import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../redux/actions';

import RangeFilter from './RangeFilter';
import CategoryFilter from './CategoryFilter';

const Filters = ({ results, stats, fetchStats }) => {
  useEffect(() => { fetchStats() }, []);

  return (
    stats && (
      <div className='card p-4'>
        <RangeFilter />
        <CategoryFilter />
      </div>
    )
  );
};

const mapStateToProps = state => ({
  results: state.search.results,
  stats: state.filters.stats
});

const mapDispatchToProps = dispatch => ({
  fetchStats: () => dispatch(actions.fetchStats())
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
