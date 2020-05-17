import React from 'react';
import PropTypes from 'prop-types';

import { ContentEditable } from '../ContentEditable';

import './Sidebar.scss';

const Sidebar = ({
  results,
  selectedResultID,
  setSelectedResult,
  editing,
  toggleEditing,
  currentDomNode,
  editedValue,
  setCurrentDomNode,
}) => {
  const closeSidebar = setSelectedResult.bind(null, null);
  const result = results.data.find(result => result.id == selectedResultID);

  const Shared = ({ children }) => {
    return (
      <div className={`sidebar ${result ? 'active' : ''}`}>
        { result && (
          <div>
            <header>
              <h4>{result.type}</h4>
              <button className="close" onClick={closeSidebar}>
                <span>&times;</span>
              </button>
            </header>
            {children}
          </div>
        )}
      </div>
    );
  };

  const UserContents = () => {
    const EditableP = ContentEditable('p');

    return (
      <Shared>
        <EditableP
          editing={editing}
          toggleEditing={toggleEditing}
          currentDomNode={currentDomNode}
          setCurrentDomNode={setCurrentDomNode}
          editedValue={editedValue}
        />
        <div className='info'>
          <span className='id'>
            #{result.id}
          </span> {result.first_name} {result.last_name}
        </div>
        <p>{result.bio}</p>
      </Shared>
    );
  };

  const ProjectContents = () => (
    <Shared>
      <div className='info'>
        <span className='id'>
          #{result.id}
        </span> {result.name}
      </div>
      <p>{result.description}</p>
    </Shared>
  );

  switch(result && result.type) {
  case 'Project':
    return <ProjectContents />;
  case 'User':
    return <UserContents />;
  }

  return null;
};

Sidebar.propTypes = {
  results: PropTypes.shape({ data: PropTypes.array }),
  selectedResultID: PropTypes.string,
  setSelectedResult: PropTypes.func,
  editing: PropTypes.bool,
  toggleEditing: PropTypes.func,
  currentDomNode: PropTypes.object,
  editedValue: PropTypes.string,
  setCurrentDomNode: PropTypes.func
};

export default Sidebar;
