import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../redux/reducers';

import App from './App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Wrapper;
