import React from 'react';
import './App.css';
import SignIn from "./components/accounts/SignIn"
import SignUp from "./components/accounts/SignUp"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/pages/Home.js"
import Landing from "./components/pages/Landing.js"
import 'materialize-css/dist/css/materialize.min.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing} currentPage = {true}/>
            <Route path="/home" component={Home} currentPage = {false}/>
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route render={() => <h3 className="white-text"> Oops, this page does not exist</h3>} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
