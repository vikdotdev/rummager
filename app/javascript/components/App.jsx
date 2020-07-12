import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Search from './Search/Search';
import Results from './Results/Results';
import Sidebar from './Sidebar/Sidebar';
import Filters from './Filters/Filters';

import actions from '../redux/actions';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <Switch>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/results'>
              <Search />
              <div className="main-wrapper">
                <div className="row">
                  <div className="col-4">
                    <Filters/>
                  </div>
                  <div className="col-8">
                    <Results />
                  </div>
                </div>
              </div>
              <Sidebar />
            </Route>
            <Route to='/'>
              <Redirect to="/search" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchAll: () => dispatch(actions.fetchAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
