import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Autosuggest from 'react-autosuggest';

import actions from '../../redux/actions';
import { highlightFor } from '../../util/highlight';

import './Search.scss';

const Search = ({
  keywords,
  suggestions,
  updateInput,
  fetchAll,
  fetchAllSuggestions,
  clearSuggestions,
  history,
  location
}) => {
  const startSearch = () => {
    fetchAll();

    const path = '/results';
    location.pathname !== path && history.push(path);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    fetchAllSuggestions(value);
  };

  const getSuggestionValue = suggestion => {
    switch(suggestion.type) {
    case 'User': return `${suggestion.first_name} ${suggestion.last_name}`;
    case 'Project': return suggestion.name;
    }
  };

  const renderSuggestion = (suggestion) => {
    switch(suggestion.type) {
    case 'User':
      return (
        <div value={`${suggestion.first_name} ${suggestion.last_name}`}>
          {highlightFor({ result: suggestion, field: 'first_name' })} {highlightFor({ result: suggestion, field: 'last_name' })}
        </div>
      );
    case 'Project':
      return (
        <div value={suggestion.name}>
          {highlightFor({ result: suggestion, field: 'name' })}
        </div>
      );
    }
  };

  const onChange = (e, { newValue, method }) => {
    updateInput(newValue);

    method == 'click' && startSearch();
  };

  const inputProps = {
    placeholder: 'Search...',
    value: keywords,
    onChange: onChange,
    onKeyPress: e => e.key == 'Enter' && startSearch(),
    className: 'input-props'
  };

  return (
    <div className="pt-5">
      <div className="row">
        <div className="col-10">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={clearSuggestions}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-outline-primary h-100 w-100" onClick={startSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  keywords: PropTypes.string,
  suggestions: PropTypes.array,
  updateInput: PropTypes.func,
  fetchAll: PropTypes.func,
  fetchAllSuggestions: PropTypes.func,
  clearSuggestions: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => ({
  keywords: state.search.keywords,
  suggestions: state.suggestions.suggestions,
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error,
  selectedResultID: state.sidebar.selectedResultID
});

const mapDispatchToProps = dispatch => ({
  updateInput: keywords => dispatch(actions.searchValueChange(keywords)),
  fetchAll: () => dispatch(actions.fetchAll()),
  fetchAllSuggestions: () => dispatch(actions.fetchAllSuggestions()),
  clearSuggestions: () => dispatch(actions.clearSuggestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
