import { combineReducers } from 'redux';
import search from './searchReducer';
import suggestions from './suggestionsReducer';
import sidebar from './sidebarReducer';
import filters from './filtersReducer';

export default combineReducers({ search, suggestions, sidebar, filters });
