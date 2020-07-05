const defaultState = {
  resultTypes: [],
  ratingRange: {
    min: 1,
    max: 10,
  },
  ratingRangeThreshold: {
    min: 1,
    max: 10
  }
};

const filtersReducer = (state = defaultState, { type, resultTypes, ratingRange }) => {
  switch (type) {
  case 'FILTER_RESULT_TYPE': return { ...state, resultTypes };
  case 'FILTER_RATING': return { ...state, ratingRange };
  default: return state;
  }
};

export default filtersReducer;
