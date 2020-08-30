import React from 'react';
import './App.css';
import SignIn from "./components/accounts/SignIn"
import SignUp from "./components/accounts/SignUp"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/pages/Home.js"
import Landing from "./components/pages/Landing.js"
import firebase from './firebase'
import 'materialize-css/dist/css/materialize.min.css';
import { AuthProvider } from './components/accounts/auth';
import PrivateRoutes from './components/PrivateRoutes';



function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <div className="App">
              <Route path="/" exact component={Landing} currentPage = {true}/>
              <PrivateRoutes path="/home" component={Home} currentPage = {false}/>
              <Route path="/login" component={SignIn} />
              <Route path="/register" component={SignUp} />
              {/* <Route render={() => <h3 className="white-text"> Oops, this page does not exist</h3>} />   */}
            </div>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
