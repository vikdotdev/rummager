import React from 'react';
import PropTypes from 'prop-types';

const ContentEditable = WrappedComponent => {
  return class extends React.Component {
    isValueChanged() {
      const { editedValue, currentDomNode } = this.props;
      return editedValue !== currentDomNode.textContent;
    }

    handleKeyDown(e) {
      switch (e.key) {
      case 'Enter':
      case 'Escape':
        this.props.toggleEditing();
      }
    }

    render() {
      const { editing, toggleEditing, setCurrentDomNode, editedValue } = this.props;

      return (
        <WrappedComponent
          className={editing ? 'editing' : ''}
          onClick={toggleEditing}
          contentEditable={editing}
          ref={setCurrentDomNode}
          /* onBlur={save} */
          onKeyDown={this.handleKeyDown}
          /* {...this.props} */
        >
          {editedValue}
        </WrappedComponent>
      );
    }
  };
};

export { ContentEditable };
