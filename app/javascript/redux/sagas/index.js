import axios from 'axios';
import { put, takeLatest, all, select } from 'redux-saga/effects';

import actions from '../actions';

function* fetchUsers() {
  const keywords = yield select(state => state.search.keywords);

  yield put(actions.fetchUsersBegin());

  try {
    const response = yield axios.get(
      'api/users.json',
      { params: { keywords }}
    );
    yield put(actions.fetchUsersSuccess(response.data));
  } catch (e) {
    yield put(actions.fetchUsersFailure(e.message));
  }
}

function* watchFetchUsers() {
  yield takeLatest('FETCH_USERS', fetchUsers);
}

function* fetchSuggestions() {
  const keywords = yield select(state => state.search.keywords);

  try {
    const response = yield axios.get(
      'api/users/autocomplete.json',
      { params: { keywords }}
    );
    yield put(actions.fetchSuggestionsSuccess(response.data.data));
  } catch (e) {
    yield put(actions.fetchSuggestionsFailure(e.message));
  }
}

function* watchFetchSuggestions() {
  yield takeLatest('FETCH_SUGGESTIONS', fetchSuggestions);
}

export default function* rootSaga() {
  yield all([ watchFetchUsers(), watchFetchSuggestions() ]);
}
