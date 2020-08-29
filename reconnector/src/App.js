import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from "./components/accounts/SignIn"
import SignOut from "./components/accounts/SignOut"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route to="/login" component={SignIn} />
          <Route to="/logout" component={SignOut} />
          <Route to="/">
            <header className="App-header">
              <h1> Connector </h1>
              <h4> Build your network and keep in touch!</h4>
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
