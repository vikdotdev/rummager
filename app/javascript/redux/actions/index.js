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

// FILTERS
const filterResultType = resultTypes => ({ type: 'FILTER_RESULT_TYPE', resultTypes });
const filterRating = ratingRange => ({ type: 'FILTER_RATING', ratingRange });
const filterCategories = categories => ({ type: 'FILTER_CATEGORIES', categories });

// STATS
const fetchStats = () => ({ type: 'FETCH_STATS' });
const fetchStatsBegin = () => ({ type: 'FETCH_STATS_BEGIN' });
const fetchStatsSuccess = stats => ({ type: 'FETCH_STATS_SUCCESS', stats });
const fetchStatsFailure = error => ({ type: 'FETCH_STATS_FAILURE', error });

// MISC
const searchValueChange = keywords => ({
  type: 'SEARCH_VALUE_CHANGE', keywords
});

const setSelectedResult = id => ({
  type: 'SET_SIDEBAR_SELECTED_RESULT',
  selectedResultID: id
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
  filterResultType,
  filterRating,
  filterCategories,
  fetchStats,
  fetchStatsBegin,
  fetchStatsSuccess,
  fetchStatsFailure,
  searchValueChange,
  setSelectedResult
};
