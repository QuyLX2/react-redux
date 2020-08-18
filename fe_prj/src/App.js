import React, { Component } from 'react';
import UserHomePageDefault from './views/pages/UserHomePageDefault';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './views/pages/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <UserHomePageDefault />
            </Route>
            <Route  path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;