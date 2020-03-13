import React from 'react';
import PropTypes from 'prop-types';
import 'react-router-dom';

class App extends React.Component {
  constructor({ greeting }) {
    super();

    this.state = {
      greeting
    };
  }

  render () {
    const { greeting } = this.state;

    return (
      <React.Fragment>
        { greeting }
      </React.Fragment>
    );
  }
}

export default App;
