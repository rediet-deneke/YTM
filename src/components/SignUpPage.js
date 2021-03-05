import React from 'react';
import './../App.css';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import firebase from 'firebase'


class SignUpPage extends React.Component {
  constructor(props) {
    
    super(props);
    this.db = firebase.firestore()
    this.auth = firebase.auth()
    // Don't call this.setState() here!
    this.state = { comment: "", result: false };
  }
  handleComment() {
    this.setState({result: true})
  }
  render() {
    return (
      <div>
          <h2>Welcome Back!</h2>
          <input type="text" id="comment" value={this.state.comment} placeholder="enter a comment" onChange={(e) => this.setState({...this.state,comment: e.target.value})}></input><br/>
          <button onClick={() => this.handleComment()}>Submit</button>
          {this.state.result && <h1>{this.state.comment}</h1>}
          <div>
           Choose a Tutor!
          </div>
         
      </div>
    );
    
  }
}
export default SignUpPage;