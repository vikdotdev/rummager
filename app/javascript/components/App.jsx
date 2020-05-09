import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import actions from '../redux/actions';

import Search from './Search/Search';
import Results from './Results/Results';
import Sidebar from './Sidebar/Sidebar';

import './spine.scss';
import './App.scss';

const App = ({
  keywords,
  results,
  suggestions,
  loading,
  error,
  selectedUserID,
  updateInput,
  fetchAll,
  fetchAllSuggestions,
  clearSuggestions,
  setSelectedUser
}) => (
  <div className='container'>
    <Router>
      <Switch>
        <Route path='/search'>
          <Search
            keywords={keywords}
            suggestions={suggestions}
            updateInput={updateInput}
            fetchAll={fetchAll}
            fetchAllSuggestions={fetchAllSuggestions}
            clearSuggestions={clearSuggestions}
          />
        </Route>
        <Route path='/results'>
          <Search
            keywords={keywords}
            suggestions={suggestions}
            updateInput={updateInput}
            fetchAll={fetchAll}
            fetchAllSuggestions={fetchAllSuggestions}
            clearSuggestions={clearSuggestions}
          />
          <Results loading={loading} results={results} setSelectedUser={setSelectedUser} />
          <Sidebar results={results} selectedUserID={selectedUserID} setSelectedUser={setSelectedUser}/>
        </Route>
        <Route to='/'>
          <Redirect to="/search" />
        </Route>
      </Switch>
    </Router>
  </div>
);

App.propTypes = {
  keywords: PropTypes.string,
  suggestions: PropTypes.array,
  results: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
  selectedUserID: PropTypes.string,
  updateInput: PropTypes.func,
  fetchAll: PropTypes.func,
  fetchAllSuggestions: PropTypes.func,
  clearSuggestions: PropTypes.func,
  setSelectedUser: PropTypes.func
};

const mapStateToProps = state => ({
  keywords: state.search.keywords,
  suggestions: state.suggestions.suggestions,
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error,
  selectedUserID: state.search.selectedUserID
});

const mapDispatchToProps = dispatch => ({
  updateInput: keywords => dispatch(actions.searchValueChange(keywords)),
  fetchAll: () => dispatch(actions.fetchAll()),
  fetchAllSuggestions: () => dispatch(actions.fetchAllSuggestions()),
  clearSuggestions: () => dispatch(actions.clearSuggestions()),
  setSelectedUser: id => dispatch(actions.setSelectedUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
