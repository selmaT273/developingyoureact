import React from 'react';
import { AuthContext } from '../../contexts/auth';
import '../auth/login.css';

// import Register from './register';
// import { If } from '../if';
// import Modal from '../modal';
// import GoalDetails from '../../goaldetails/index';




export default class Login extends React.Component {
  //constructor() {
  //  super();

    // this.state = {
    //   showRegister: false,
    // };
 // }

  // toggleRegisterModal = () => {
  //   this.setState(oldState => ({ showRegister: !oldState.showRegister}));
  // }

  static contextType = AuthContext;

  handleSubmit = async (e)  => {
    e.preventDefault();

    const { username, password } = e.target.elements;

    if (username !== "" && password !== ""){
      await this.context.login(username.value, password.value);
    }
    else {
      this.toggleRegisterModal();
    }
  }

  logoutSubmit = e => {
    e.preventDefault();

    this.context.logout();
  }

  render() {

    // const {showRegister} = this.state;

    const { user } = this.context;

    if (user) {
      return (
        <h1>
          
        </h1>
        );
    }

    return (
      <>
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="login-header">Login</div>
          <div className="content">
            <div className="login-image">
              <img className="temp-login-image" alt="login" src={require('../../img/temp-login-image.png')} />            
            </div>
            <div className="login-section">
              <div className="login-group">
                <label htmlFor="username">Username</label>
                <input className="login-username" placeholder="Username" name="username" />
              </div>
              <div className="login-group">
                <label htmlFor="password">Password</label>
                <input className="login-password" placeholder="Password" type="password" name="password" />
              </div>
            </div>
          </div>
          <div className="login-footer">
            <button className="login-button">Log In</button>
          </div>

      </form>

      </>
    )
  }
}