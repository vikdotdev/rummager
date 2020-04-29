import { combineReducers } from 'redux';
import search from './searchReducer';
import suggestions from './suggestionsReducer';

export default combineReducers({ search, suggestions });
