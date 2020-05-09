import { combineReducers } from 'redux';
import search from './searchReducer';
import suggestions from './suggestionsReducer';
import sidebar from './sidebarReducer';

export default combineReducers({ search, suggestions, sidebar });
