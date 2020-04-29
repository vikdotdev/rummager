import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

import './Search.scss';

const Search = ({
  keywords,
  suggestions,
  updateInput,
  fetchUsers,
  fetchSuggestions,
  clearSuggestions,
  history,
  location
}) => {
  const startSearch = () => {
    if (keywords.length) {
      fetchUsers();

      const path = '/results';
      location.pathname !== path && history.push(path);
    }
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    fetchSuggestions(value);
  };

  const getSuggestionValue = sug => {
    return `${sug.first_name} ${sug.last_name}`;
  };

  const renderSuggestion = sug => {
    const full_name = `${sug.first_name} ${sug.last_name}`;
    return (
      <div value={full_name}>
        {full_name}
      </div>
    );
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
  fetchUsers: PropTypes.func,
  fetchSuggestions: PropTypes.func,
  clearSuggestions: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(Search);
