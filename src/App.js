import React, { Component } from 'react';
import YTMLogo from './images/logoYTM.png';
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import FAQ from './components/FindTutor';
import Login from './components/Login';
import Signup from './components/Signup';
import SignUpPage from './components/SignUpPage';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="menu">
            <img src={YTMLogo}></img>
            <ul className="navLinks">
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/services">Our Services</Link> </li>
              <li> <Link to="/faq">Find Tutor</Link> </li>
              <li> <input placeholder="What are you looking for?"></input></li>
              <li> <Link to="/login"><button id="loginBtn"> Login</button></Link></li>
              <li> <Link to="/signup"><button id="signupBtn"> Signup</button></Link></li>
                
            </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/faq" component={FAQ} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/submit" component={SignUpPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
