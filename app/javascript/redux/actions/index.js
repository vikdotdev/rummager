const searchValueChange = keywords => ({ type: 'SEARCH_VALUE_CHANGE', keywords });

const loadUsersBegin = () => ({ type: 'LOAD_USERS_BEGIN' });

const loadUsersSuccess = results => ({ type: 'LOAD_USERS_SUCCESS', results });

const loadUsersFailure = error => ({ type: 'LOAD_USERS_FAILURE', error });

export default {
  searchValueChange,
  loadUsersBegin,
  loadUsersSuccess,
  loadUsersFailure
};
