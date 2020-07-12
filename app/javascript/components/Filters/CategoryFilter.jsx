import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import actions from '../../redux/actions';

import 'react-input-range/lib/css/index.css';

const CategoryFilter = ({ results, aggs, categories, global_aggs, fetchAll, filterCategories }) => {
  const docFromKey = (key) => {
    return _.find(aggs.category_distinct.buckets, (c) => c.key === key);
  };

  const toggleCategory = (e, category) => {
    categories[e.target.checked ? 'add' : 'delete'](category.key);

    filterCategories(categories);
    fetchAll();
  };

  return global_aggs.category_distinct.buckets.map((category) => {
    const count = results.length && docFromKey(category.key);

    return (
      <div className='mt-5' key={category.key}>
        <input
          type="checkbox"
          onChange={(e) => toggleCategory(e, category)}
        />
        <label className="mx-4">{category.key}</label>
        <label className="mx-4">{count ? count.doc_count : 0}</label>
      </div>
    );
  });
};

const mapStateToProps = state => ({
  results: state.search.results,
  aggs: state.search.aggs,
  categories: state.filters.categories,
  global_aggs: state.filters.global_aggs
});

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(actions.fetchAll()),
  filterCategories: categories => dispatch(actions.filterCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
