import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import actions from '../redux/actions';

import Search from './Search/Search';

const App = ({ keyword, searchValueChange }) => (
  <Router>
    <Switch>
      <Route path='/'>
        <Search keyword={keyword} searchValueChange={searchValueChange} />
        {keyword}
      </Route>
    </Switch>
  </Router>
);

const mapStateToProps = state => {
  return {
    keyword: state.searchStore.keyword
  };
};

const mapDispatchToProps = dispatch => ({
  searchValueChange: ({ keyword }) => dispatch(actions.searchValueChange(keyword))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
