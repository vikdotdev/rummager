const defaultState = {
  loading: false,
  resultTypes: [],
  ratingRange: {
    min: null,
    max: null,
  },
  categories: new Set(),
  global_aggs: null,
  error: null
};

const filtersReducer = (
  state = defaultState,
  { type, resultTypes, ratingRange, global_aggs, categories, error}) => {
  switch (type) {
  case 'FILTER_RESULT_TYPE': return { ...state, resultTypes };
  case 'FILTER_RATING':
      return { ...state, ratingRange };
  case 'FILTER_CATEGORIES': return { ...state, categories };
  case 'FETCH_STATS_BEGIN': return { ...state, loading: true };
  case 'FETCH_STATS_SUCCESS':
    const initialRatingRange = {
      min: global_aggs.rating_stats.min,
      max: global_aggs.rating_stats.max
    };
    const initialized = state.ratingRange.min && state.ratingRange.min
    const newRatingRange = !initialized ? initialRatingRange : state.ratingRange;

    return { ...state, global_aggs, ratingRange: newRatingRange, loading: false, init: false };
  case 'FETCH_STATS_FAILURE': return { ...state, error, loading: false };
  default: return state;
  }
};

export default filtersReducer;
