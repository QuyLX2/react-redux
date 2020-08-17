import React, { Component } from 'react';
import UserHomePageDefault from './views/pages/UserHomePageDefault';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './views/pages/LoginPage';
import routes from './routes'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <UserHomePageDefault routes={routes}>  
              </UserHomePageDefault>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;