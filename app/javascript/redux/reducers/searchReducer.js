const defaultState = {
  keywords: '',
  results: { data: [] },
  loading: false,
  error: '',
  selectedUserID: null
};

const searchReducer = (
  state = defaultState,
  { type, keywords, results, error, selectedUserID }
) => {
  switch (type) {
  case 'FETCH_ALL_BEGIN': return { ...state, loading: true };
  case 'FETCH_ALL_SUCCESS': return { ...state, results, loading: false };
  case 'FETCH_ALL_FAILURE': return { ...state, error, loading: false };
  case 'SEARCH_VALUE_CHANGE': return { ...state, keywords };
  case 'SET_SELECTED_USER': return { ...state, selectedUserID };
  default: return state;
  }
};

export default searchReducer;
