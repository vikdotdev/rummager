import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

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
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={clearSuggestions}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
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

export default withRouter(Search);
