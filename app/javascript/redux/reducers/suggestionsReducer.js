const defaultState = {
  suggestions: [],
  error: ''
};

const suggestionsReducer = (
  state = defaultState,
  { type, suggestions, loading, error }
) => {
  switch (type) {
  case 'FETCH_SUGGESTIONS_SUCCESS': return { ...state, suggestions };
  case 'FETCH_SUGGESTIONS_FAILURE': return { ...state, error };
  case 'CLEAR_SUGGESTIONS': return { ...state, suggestions: [] };
  default: return state;
  }
};

export default suggestionsReducer;
