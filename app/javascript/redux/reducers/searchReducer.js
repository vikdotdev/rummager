const defaultState = {
  keywords: [],
  results: [],
  error: ''
};

const searchReducer = (state = defaultState, { type, keywords, results, error }) => {
  switch (type) {
  case 'SEARCH_VALUE_CHANGE': return { ...state, keywords };
  case 'LOAD_USERS_BEGIN': return { ...state, results };
  case 'LOAD_USERS_SUCCESS': return { ...state, results };
  case 'LOAD_USERS_FAILURE': return { ...state, error };
  default: return state;
  }
};

export default searchReducer;
