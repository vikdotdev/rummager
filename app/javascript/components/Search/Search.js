import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

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
    if (keywords.length) {
      fetchAll();

      const path = '/results';
      location.pathname !== path && history.push(path);
    }
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    fetchAllSuggestions(value);
  };

  const getSuggestionValue = suggestion => {
    console.log(suggestion);
    switch(suggestion.type) {
    case 'User': return `${suggestion.first_name} ${suggestion.last_name}`;
    case 'Project': return suggestion.name;
    }
  };

  const renderSuggestion = sug => {
    switch(sug.type) {
    case 'User':
      const full_name = `${sug.first_name} ${sug.last_name}`;

      return (<div value={full_name}>{full_name}</div>);
    case 'Project':
      return (<div value={sug.name}>{sug.name}</div>);
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
    onKeyPress: e => e.key == 'Enter' && startSearch()
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={clearSuggestions}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
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

export default withRouter(Search);
