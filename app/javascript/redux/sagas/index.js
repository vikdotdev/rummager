import axios from 'axios';
import { put, takeLatest, all, select } from 'redux-saga/effects';

import actions from '../actions';

function* fetchAll() {
  const keywords = yield select(state => state.search.keywords);
  const rating = yield select(state => state.filters.ratingRange);
  const categories = yield select(state => Array.from(state.filters.categories));
  console.log(categories)

  yield put(actions.fetchAllBegin());

  try {
    const response = yield axios.get(
      'api/search.json',
      { params: { keywords, rating, categories }}
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

function* fetchStats() {
  yield put(actions.fetchStatsBegin());

  try {
    const response = yield axios.get('api/search/stats.json');
    yield put(actions.fetchStatsSuccess(response.data));
  } catch (e) {
    yield put(actions.fetchStatsFailure(e.message));
  }
}

function* watchFetchAll() {
  yield takeLatest('FETCH_ALL', fetchAll);
}

function* watchFetchAllSuggestions() {
  yield takeLatest('FETCH_ALL_SUGGESTIONS', fetchAllSuggestions);
}


function* watchFetchStats() {
  yield takeLatest('FETCH_STATS', fetchStats);
}

export default function* rootSaga() {
  yield all([
    watchFetchAll(),
    watchFetchAllSuggestions(),
    watchFetchStats()
  ]);
}
