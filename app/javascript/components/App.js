import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import actions from '../redux/actions';
import API from '../api';

import Search from './Search/Search';
import Results from './Results/Results';

const App = ({ keywords, results, loading, error, updateInput, fetchUsers }) => (
  <Router>
    <Switch>
      <Route path='/search'>
        <Search
          keywords={keywords}
          updateInput={updateInput}
          fetchUsers={fetchUsers}
        />
      </Route>
      <Route path='/results'>
        <Search
          keywords={keywords}
          updateInput={updateInput}
          fetchUsers={fetchUsers}
        />
        <Results loading={loading} results={results} />
      </Route>
      <Route to='/'>
        <Redirect to="/search" />
      </Route>
    </Switch>
  </Router>
);

App.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  results: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
  updateInput: PropTypes.func,
  fetchUsers: PropTypes.func
};

const mapStateToProps = state => ({
  keywords: state.search.keywords,
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error
});

const mapDispatchToProps = dispatch => ({
  updateInput: keywords => dispatch(actions.searchValueChange(keywords)),
  fetchUsers: keywords => dispatch(API.user.all(keywords))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
