import React from 'react';
import { AuthContext } from '../../contexts/auth';
import '../../index.scss';



export default class Login extends React.Component {
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
    console.log('auth context', this.context);

    const { user } = this.context;

    if (user) {
      return (
        <h1>
          Welcome back, {user.userName}!
        </h1>
        );
    }

    return (
      
      <form class="login-form" onSubmit={this.handleSubmit}>
        <h3>Log in to start working on your goals!</h3>
        <input class="login-username" placeholder="Username" name="username" />
        <br />
        <br />
        <input class="login-password" placeholder="Password" type="password" name="password" />
        <br />
        <br />
        <button class="login-button">Log In</button>
      </form>
    )
  }
}