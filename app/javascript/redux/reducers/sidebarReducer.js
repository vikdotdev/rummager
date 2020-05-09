const defaultState = {
  selectedResultID: null
};

const sidebarReducer = (
  state = defaultState,
  { type, selectedResultID }
) => {
  switch (type) {
  case 'SET_SIDEBAR_SELECTED_RESULT': return { ...state, selectedResultID };
  default: return state;
  }
};

export default sidebarReducer;
