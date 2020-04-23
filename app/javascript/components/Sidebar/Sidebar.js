import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.scss';

const Sidebar = ({ results, selectedUserID, setSelectedUser }) => {
  const user = results.data.find(result => result.id == selectedUserID);
  const active = user ? 'active' : '';
  const closeSidebar = setSelectedUser.bind(null, null);

  return  (
    <div className={`sidebar ${active}`}>
      { user && (
        <div>
          <header>
            <h4>User</h4>
            <button className="close" onClick={closeSidebar}>
              <span>&times;</span>
            </button>
          </header>
          <div className='info'>
            <span className='id'>#{user.id}</span> {user.first_name} {user.last_name}
          </div>
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  results: PropTypes.shape({ data: PropTypes.array }),
  selectedUserID: PropTypes.string,
  setSelectedUser: PropTypes.func
};

export default Sidebar;
