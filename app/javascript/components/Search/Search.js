import React from 'react';

const Search = ({ keyword, searchValueChange }) => (
  <input onChange={e => searchValueChange({ keyword: e.target.value })} />
);

export default Search;
