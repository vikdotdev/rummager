const searchValueChange = keywords => ({
  type: 'SEARCH_VALUE_CHANGE', keywords
});

const fetchUsers = () => ({ type: 'FETCH_USERS' });

const fetchUsersBegin = () => ({ type: 'FETCH_USERS_BEGIN' });

const fetchUsersSuccess = results => ({ type: 'FETCH_USERS_SUCCESS', results });

const fetchUsersFailure = error => ({ type: 'FETCH_USERS_FAILURE', error });

const setSelectedUser = id => ({ type: 'SET_SELECTED_USER', selectedUserID: id });

const fetchSuggestions = () => ({ type: 'FETCH_SUGGESTIONS' });

const fetchSuggestionsSuccess = suggestions => ({
  type: 'FETCH_SUGGESTIONS_SUCCESS',
  suggestions
});

const fetchSuggestionsFailure = error => ({
  type: 'FETCH_SUGGESTIONS_FAILURE',
  error
});

const clearSuggestions = () => ({ type: 'CLEAR_SUGGESTIONS' });

export default {
  searchValueChange,
  fetchUsers,
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersFailure,
  setSelectedUser,
  fetchSuggestions,
  fetchSuggestionsSuccess,
  fetchSuggestionsFailure,
  clearSuggestions
};
