import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Build from './Build.js';
import Builds from './Builds.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Router history={browserHistory}>
              <Route path="/" component={Builds} />
              <Route path="/build/:buildID" component={Build} />
          </Router>
        </div>
      </div>
    );
  }
}

/*<Build buildID="142153db-e10d-46f6-8e6b-f08a521c379f" />*/

export default App;
