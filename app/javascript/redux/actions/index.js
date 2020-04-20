const searchValueChange = keywords => ({ type: 'SEARCH_VALUE_CHANGE', keywords });

const fetchUsers = () => ({ type: 'FETCH_USERS' });

const fetchUsersBegin = () => ({ type: 'FETCH_USERS_BEGIN' });

const fetchUsersSuccess = results => ({ type: 'FETCH_USERS_SUCCESS', results });

const fetchUsersFailure = error => ({ type: 'FETCH_USERS_FAILURE', error });

export default {
  searchValueChange,
  fetchUsers,
  fetchUsersBegin,
  fetchUsersSuccess,
  fetchUsersFailure
};
