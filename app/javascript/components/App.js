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
  fetchUsers,
  fetchSuggestions,
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
            fetchUsers={fetchUsers}
            fetchSuggestions={fetchSuggestions}
            clearSuggestions={clearSuggestions}
          />
        </Route>
        <Route path='/results'>
          <Search
            keywords={keywords}
            suggestions={suggestions}
            updateInput={updateInput}
            fetchUsers={fetchUsers}
            fetchSuggestions={fetchSuggestions}
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
  results: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
  selectedUserID: PropTypes.string,
  updateInput: PropTypes.func,
  fetchUsers: PropTypes.func,
  fetchSuggestions: PropTypes.func,
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
  fetchUsers: () => dispatch(actions.fetchUsers()),
  fetchSuggestions: () => dispatch(actions.fetchSuggestions()),
  clearSuggestions: () => dispatch(actions.clearSuggestions()),
  setSelectedUser: id => dispatch(actions.setSelectedUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
