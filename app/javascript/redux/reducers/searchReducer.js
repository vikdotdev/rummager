const defaultState = {
  keywords: [],
  results: { data: [] },
  loading: false,
  error: ''
};

const searchReducer = (
  state = defaultState,
  { type, keywords, results, error }
) => {
  switch (type) {
  case 'SEARCH_VALUE_CHANGE': return { ...state, keywords };
  case 'FETCH_USERS_BEGIN': return { ...state, loading: true };
  case 'FETCH_USERS_SUCCESS': return { ...state, results, loading: false };
  case 'FETCH_USERS_FAILURE': return { ...state, error, loading: false };
  default: return state;
  }
};

export default searchReducer;
