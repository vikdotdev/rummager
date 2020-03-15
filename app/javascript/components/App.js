import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import actions from '../redux/actions';
import API from '../api';

import Search from './Search/Search';

const App = ({ keywords, results, error, updateInput, fetchUsers }) => (
  <Router>
    <Switch>
      <Route path='/search'>
        <Search
          keywords={keywords}
          updateInput={updateInput}
          fetchUsers={fetchUsers}
        />
        <div>{keywords}</div>
        <div>{JSON.stringify(results)}</div>
        <div>{error}</div>
      </Route>
      <Route to='/'>
        <Redirect to="/search" />
      </Route>
    </Switch>
  </Router>
);

App.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string),
  results: PropTypes.array,
  error: PropTypes.string,
  updateInput: PropTypes.func,
  fetchUsers: PropTypes.func
};

const mapStateToProps = state => ({
  keywords: state.search.keywords,
  results: state.search.results,
  error: state.search.error
});

const mapDispatchToProps = dispatch => ({
  updateInput: keywords => dispatch(actions.searchValueChange(keywords)),
  fetchUsers: keywords => dispatch(API.user.all(keywords))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
