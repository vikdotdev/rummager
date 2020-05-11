import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../redux/sagas';
import rootReducer from '../redux/reducers';
import App from './App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Wrapper;
