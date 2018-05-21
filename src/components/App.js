import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MenuAppBar from './MenuAppBar';
import LandingPage from './LandingPage';
import Workshops from './Workshops';
import Workshop from './Workshop';
import Roster from './Roster';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <MenuAppBar />
          <main>
            <Router>
              <div>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/workshops" component={Workshops} />
                <Route exact path="/workshops/:1234" component={Workshop} />
                <Route exact path="/roster" component={Roster} />
              </div>
            </Router>
          </main>
        </div>
    );
  }
}

export default App;
