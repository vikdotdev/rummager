import axios from 'axios';
import { put, takeLatest, all, select } from 'redux-saga/effects';

import actions from '../actions';

function* fetchAll() {
  const keywords = yield select(state => state.search.keywords);

  yield put(actions.fetchAllBegin());

  try {
    const response = yield axios.get(
      'api/search.json',
      { params: { keywords }}
    );
    yield put(actions.fetchAllSuccess(response.data));
  } catch (e) {
    yield put(actions.fetchAllFailure(e.message));
  }
}

function* fetchAllSuggestions() {
  const keywords = yield select(state => state.search.keywords);

  try {
    const response = yield axios.get(
      'api/search/autocomplete.json',
      { params: { keywords }}
    );
    yield put(actions.fetchAllSuggestionsSuccess(response.data.data));
  } catch (e) {
    yield put(actions.fetchAllSuggestionsFailure(e.message));
  }
}

function* watchFetchAll() {
  yield takeLatest('FETCH_ALL', fetchAll);
}

function* watchFetchAllSuggestions() {
  yield takeLatest('FETCH_ALL_SUGGESTIONS', fetchAllSuggestions);
}

export default function* rootSaga() {
  yield all([
    watchFetchAll(),
    watchFetchAllSuggestions()
  ]);
}
