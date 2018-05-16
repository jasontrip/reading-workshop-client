import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Workshops from './Workshops';
import Roster from './Roster';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>Nav</nav>
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/roster" component={Roster} />
            <Route exact path="/workshops" component={Workshops} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
