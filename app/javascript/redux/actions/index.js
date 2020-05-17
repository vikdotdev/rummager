// FETCHING
// ALL
const fetchAll = () => ({ type: 'FETCH_ALL' });
const fetchAllBegin = () => ({ type: 'FETCH_ALL_BEGIN' });
const fetchAllSuccess = results => ({ type: 'FETCH_ALL_SUCCESS', results });
const fetchAllFailure = error => ({ type: 'FETCH_ALL_FAILURE', error });

// SUGGESTIONS
// ALL
const fetchAllSuggestions = () => ({ type: 'FETCH_ALL_SUGGESTIONS' });
const fetchAllSuggestionsSuccess = suggestions => ({
  type: 'FETCH_ALL_SUGGESTIONS_SUCCESS',
  suggestions
});
const fetchAllSuggestionsFailure = error => ({
  type: 'FETCH_ALL_SUGGESTIONS_FAILURE',
  error
});

// is applicable to every kind of suggestion, is used in
// Autosuggest component
const clearSuggestions = () => ({ type: 'CLEAR_SUGGESTIONS' });

// SIDEBAR
const setSelectedResult = id => ({
  type: 'SET_SIDEBAR_SELECTED_RESULT',
  selectedResultID: id
});


// MISC
const searchValueChange = keywords => ({
  type: 'SEARCH_VALUE_CHANGE', keywords
});

const toggleEditing = () => ({
  type: 'TOGGLE_EDITING'
});

const setCurrentDomNode = currentDomNode => ({
  type: 'SET_CURRENT_DOM_NODE', currentDomNode
});

export default {
  fetchAll,
  fetchAllBegin,
  fetchAllSuccess,
  fetchAllFailure,
  fetchAllSuggestions,
  fetchAllSuggestionsSuccess,
  fetchAllSuggestionsFailure,
  clearSuggestions,
  searchValueChange,
  setSelectedResult,
  toggleEditing,
  setCurrentDomNode
};
