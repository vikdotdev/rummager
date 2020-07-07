import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import actions from '../../redux/actions';

import 'react-input-range/lib/css/index.css';

const CategoryFilter = ({ categories, stats, fetchAll, filterCategories }) => {
  return stats.data.category_distinct.buckets.map((category) => {

    const toggleCategory = (e, category) => {
      categories[e.target.checked ? 'add' : 'delete'](category.key);

      filterCategories(categories);
      fetchAll();
    };

    return (
      <div className='mt-5' key={category.key}>
        <input
          type="checkbox"
          onChange={(e) => toggleCategory(e, category)}
        />
        <label className="mx-4">{category.key}</label>
        <label>{category.doc_count}</label>
      </div>
    );
  });
};

const mapStateToProps = state => ({
  categories: state.filters.categories,
  stats: state.filters.stats
});

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(actions.fetchAll()),
  filterCategories: categories => dispatch(actions.filterCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
