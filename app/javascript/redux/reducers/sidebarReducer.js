const defaultState = {
  selectedResultID: null,
  editing: false,
  currentDomNode: null,
  editedValue: 'something'
};

const sidebarReducer = (
  state = defaultState,
  { type, selectedResultID, currentDomNode }
) => {
  switch (type) {
  case 'SET_SIDEBAR_SELECTED_RESULT': return { ...state, selectedResultID };
  case 'TOGGLE_EDITING': return { ...state,  editing: !state.editing };
  case 'SET_CURRENT_DOM_NODE': return { ...state,  currentDomNode };
  default: return state;
  }
};

export default sidebarReducer;
