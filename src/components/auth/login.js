import React from 'react';
import { AuthContext } from '../../contexts/auth';
import '../../index.scss';
import Register from './register';
import { If } from '../if';
import Modal from '../modal';
// import GoalDetails from '../../goaldetails/index';




export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      showRegister: false,
    };
  }

  toggleRegisterModal = () => {
    this.setState(oldState => ({ showRegister: !oldState.showRegister}));
  }

  static contextType = AuthContext;

  handleSubmit = (e)  => {
    e.preventDefault();

    const { username, password } = e.target.elements;

    this.context.login(username.value, password.value);
  }

  logoutSubmit = e => {
    e.preventDefault();

    this.context.logout();
  }

  render() {

    const {showRegister} = this.state;

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
        <h3>Log in to start working on your goals!</h3>
        <input className="login-username" placeholder="Username" name="username" />
        <br />
        <br />
        <input className="login-password" placeholder="Password" type="password" name="password" />
        <br />
        <br />
        <button className="login-button">Log In</button>
        <button className="register-button>" onClick={this.toggleRegisterModal}>Register</button> 
      </form>

      <If condition={showRegister}>
        <Modal title="RegisterModal" onClose={this.toggleRegisterModal}>
          <Register />
        </Modal>
      </If>
      </>
    )
  }
}