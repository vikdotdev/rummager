const defaultState = {
  loading: false,
  resultTypes: [],
  ratingRange: {
    min: 2,
    max: 9,
  },
  ratingRangeThreshold: {
    min: 1,
    max: 10
  },
  categories: new Set(),
  stats: null,
  error: null
};

const filtersReducer = (
  state = defaultState,
  { type, resultTypes, ratingRange, stats, categories, error}) => {
  switch (type) {
  case 'FILTER_RESULT_TYPE': return { ...state, resultTypes };
  case 'FILTER_RATING': return { ...state, ratingRange };
  case 'FILTER_CATEGORIES': return { ...state, categories };
  case 'FETCH_STATS_BEGIN': return { ...state, loading: true };
  case 'FETCH_STATS_SUCCESS': return { ...state, stats, loading: false };
  case 'FETCH_STATS_FAILURE': return { ...state, error, loading: false };
  default: return state;
  }
};

export default filtersReducer;
