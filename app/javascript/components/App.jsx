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
  selectedResultID,
  updateInput,
  fetchAll,
  fetchAllSuggestions,
  clearSuggestions,
  setSelectedResult,
  editing,
  toggleEditing,
  currentDomNode,
  editedValue,
  setCurrentDomNode
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
          <Results
            loading={loading}
            results={results}
            setSelectedResult={setSelectedResult}
          />
          <Sidebar
            results={results}
            selectedResultID={selectedResultID}
            setSelectedResult={setSelectedResult}
            editing={editing}
            toggleEditing={toggleEditing}
            currentDomNode={currentDomNode}
            editedValue={editedValue}
            setCurrentDomNode={setCurrentDomNode}
          />
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
  selectedResultID: PropTypes.string,
  updateInput: PropTypes.func,
  fetchAll: PropTypes.func,
  fetchAllSuggestions: PropTypes.func,
  clearSuggestions: PropTypes.func,
  setSelectedResult: PropTypes.func,
  editing: PropTypes.bool,
  toggleEditing: PropTypes.func,
  currentDomNode: PropTypes.object,
  editedValue: PropTypes.string,
  setCurrentDomNode: PropTypes.func
};

const mapStateToProps = state => ({
  keywords: state.search.keywords,
  suggestions: state.suggestions.suggestions,
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error,
  selectedResultID: state.sidebar.selectedResultID,
  editing: state.sidebar.editing,
  currentDomNode: state.sidebar.currentDomNode,
  editedValue: state.sidebar.editedValue,
});

const mapDispatchToProps = dispatch => ({
  updateInput: keywords => dispatch(actions.searchValueChange(keywords)),
  fetchAll: () => dispatch(actions.fetchAll()),
  fetchAllSuggestions: () => dispatch(actions.fetchAllSuggestions()),
  clearSuggestions: () => dispatch(actions.clearSuggestions()),
  setSelectedResult: id => dispatch(actions.setSelectedResult(id)),
  toggleEditing: () => dispatch(actions.toggleEditing()),
  setCurrentDomNode: node => dispatch(actions.setCurrentDomNode(node))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
