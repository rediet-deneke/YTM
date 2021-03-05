import React, { Component } from 'react';
import './../App.css';
import './SignUpPage';
import firebase from 'firebase'
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import { render } from 'react-dom';

class Signup extends Component {
  constructor(props) {
    
    super(props);
    this.db = firebase.firestore()
    this.auth = firebase.auth()
    // Don't call this.setState() here!
    this.state = { isTutor: false,
                   accountName: "",
                   email: "",
                   password: "" };
  }
   async handleSubmit() {
    const newUser = await this.auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
    console.log(newUser)
    this.db.collection('users').doc().set({
      accountName: this.state.accountName,
      email: this.state.email,
      isTutor: this.state.isTutor
    }).then(() => {
      alert("yes!")
    }).catch((err) => {
      alert(err.message)
    })
  }

 

  render() {
    return (
      <div>
      <h2>Signup</h2>
      <div>
        <form action="/signup">
            <label for="emailInput">Email:</label>
            <input type="text" id="emailInput" name="emailInput" placeholder="Email here" onChange={(e) => this.setState({...this.state,email: e.target.value})}></input><br/>
            <label for="accountName">Account Name:</label>
            <input type="text" id="accountName" name="accountName" placeholder="Choose username" onChange={(e) => this.setState({...this.state,accountName: e.target.value})}></input><br/>
            <label for="passInput">Password:</label>
            <input type="text" id="passInput" name="passInput" placeholder="Password here" onChange={(e) => this.setState({...this.state,password: e.target.value})}></input><br/><br/>
            <input type="checkbox" id="tutorbox" onChange={() => this.setState({isTutor: !this.state.tutor})}/>
            <label for="tutorbox">Are you a tutor?</label>
            <li> <Link to="/submit"><button id="submitBtn" onClick={() => this.handleSubmit()}> Submit</button></Link></li>
        </form> 
      </div>
     
  </div>
    )

  }
}

export default Signup;