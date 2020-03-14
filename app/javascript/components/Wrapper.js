import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../redux/reducers';

import App from './App';

const store = createStore(rootReducer);

const Wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Wrapper;
