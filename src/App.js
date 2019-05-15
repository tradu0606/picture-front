import React, { Component } from 'react';
import { Switch, Link, BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./User/Login"
import CreateAccount from "./User/CreateAccount"
import Home from "./User/Home"
import './App.css'
import Picture from './Picture/PictureDisplay'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navbar">
            <nav>
              <h1>Pictures</h1>
              <Link to="/"><h3>Home</h3></Link>
              <Link to="/login"><h3>Login</h3></Link>
              <Link to="/createaccount"><h3>Create an Account</h3></Link>
              <Link to="/picture"><h3>Pictures</h3></Link>
            </nav>
          </div>
          <div className="mainContainer">
            <Route exact path="/"
              render={(props) => {
                return (<Home {...props} />)
              }} />
            <Route path="/login"
              render={(props) => {
                return (<Login {...props} />)
              }} />
            <Route path="/createaccount"
              render={(props) => {
                return (<CreateAccount {...props} />)
              }} />
            <Route path="/picture"
              render={(props) => {
                return (<Picture {...props} />)
              }} />


          </div>
        </div>
      </Router >
    );
  }
}

export default App;