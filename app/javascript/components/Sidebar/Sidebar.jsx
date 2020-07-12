import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import actions from '../../redux/actions';

import './Sidebar.scss';

const Sidebar = ({ results, selectedResultID, setSelectedResult }) => {
  const closeSidebar = setSelectedResult.bind(null, null);
  const result = results.find(result => result.id == selectedResultID);

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
    return (
      <Shared>
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
  results: PropTypes.array,
  selectedResultID: PropTypes.string,
  setSelectedResult: PropTypes.func
};

const mapStateToProps = state => ({
  results: state.search.results,
  loading: state.search.loading,
  selectedResultID: state.sidebar.selectedResultID
});

const mapDispatchToProps = dispatch => ({
  setSelectedResult: id => dispatch(actions.setSelectedResult(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
