import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/pages/Home.js"
import Landing from "./components/pages/Landing.js"




function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing} currentPage = {true}/>
            <Route path="/home" component={Home} currentPage = {false}/>
            <Route component={Error} exact/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
