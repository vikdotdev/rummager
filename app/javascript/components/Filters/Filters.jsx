import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../redux/actions';

import RangeFilter from './RangeFilter';
import CategoryFilter from './CategoryFilter';

const Filters = ({ global_aggs }) => {
  return (
    global_aggs && (
      <div className='card p-4'>
        <RangeFilter />
        <CategoryFilter />
      </div>
    )
  );
};

const mapStateToProps = state => ({
  global_aggs: state.filters.global_aggs
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
