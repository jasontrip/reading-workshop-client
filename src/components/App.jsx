import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LandingPage from './LandingPage';
import Workshops from './Workshops';
import Roster from './Roster';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <main>
            <div>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/workshops" component={Workshops} />
              <Route exact path="/roster" component={Roster} />
            </div>
          </main>

        </Router>
      </div>
    );
  }
}

export default connect()(App);
