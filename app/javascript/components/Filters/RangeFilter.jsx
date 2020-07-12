import React from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';

import actions from '../../redux/actions';

import 'react-input-range/lib/css/index.css';

const RangeFilter = ({ ratingRange, global_aggs, fetchAll, filterRating }) => {
  return (
    <InputRange
      minValue={global_aggs.rating_stats.min}
      maxValue={global_aggs.rating_stats.max}
      value={ratingRange}
      onChange={(ratingRange) => filterRating(ratingRange)}
      onChangeComplete={() => fetchAll()}
    />
  );
};

const mapStateToProps = state => ({
  ratingRange: state.filters.ratingRange,
  global_aggs: state.filters.global_aggs
});

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(actions.fetchAll()),
  filterRating: ratingRange => dispatch(actions.filterRating(ratingRange))
});

export default connect(mapStateToProps, mapDispatchToProps)(RangeFilter);
