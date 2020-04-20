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

const App = ({ keywords, results, loading, error, selectedUserID, updateInput, fetchUsers, setSelectedUser }) => (
  <div className='container'>
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
  keywords: PropTypes.arrayOf(PropTypes.string),
  results: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
  selectedUserID: PropTypes.string,
  updateInput: PropTypes.func,
  fetchUsers: PropTypes.func,
  setSelectedUser: PropTypes.func
};

const mapStateToProps = state => ({
  keywords: state.search.keywords,
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error,
  selectedUserID: state.search.selectedUserID
});

const mapDispatchToProps = dispatch => ({
  updateInput: keywords => dispatch(actions.searchValueChange(keywords)),
  fetchUsers: () => dispatch(actions.fetchUsers()),
  setSelectedUser: id => dispatch(actions.setSelectedUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
