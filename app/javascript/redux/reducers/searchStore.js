const defaultState = {
  keyword: ''
};

const searchStore = (state = defaultState, { type, keyword }) => {
  switch (type) {
  case 'SEARCH_VALUE_CHANGE': return { ...state, keyword };
  default: return state;
  }
};

export default searchStore;
