import React from 'react';
import { AuthContext } from '../../contexts/auth';
import '../../index.scss';

export default class Register extends React.Component {
    static contextType = AuthContext;

    handleSubmit = e => {
        e.preventDefault();
        this.context.register();
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Start achieving your goals today!</h3>
                <input placeholder="Username" name="username" required />
                <br />
                <br />
                <input placeholder="Password" type="password" name="password" required />
                <br />
                <br />
                <input placeholder="Email" type="email" name="email" required />
                <br />
                <br />
                <button>Register</button>
            </form>
        )
    }
}