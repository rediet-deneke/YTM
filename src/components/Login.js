import React from 'react';
import './SignUpPage';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

const Login = ({ match }) => (
  <div>
     <h2>Login</h2>
     <form action="/login">
            <label for="emailInput">Email or Username</label>
            <input type="text" id="emailInput" name="emailInput" placeholder="Email or Username here"></input><br/>
            <label for="passInput">Password:</label>
            <input type="text" id="passInput" name="passInput" placeholder="Password here"></input><br/><br/>
            {/* <input type="submit" value="Submit"></input> */}
            <li> <Link to="/submit"><button id="submitBtn">Welcome Back!</button></Link></li>
        </form> 
  </div>
);

export default Login;