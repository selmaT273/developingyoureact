import React from 'react';
import { AuthContext } from '../../contexts/auth';
import '../../index.scss';

export default class Register extends React.Component {
    static contextType = AuthContext;

    handleSubmit = async (e) => {
        e.preventDefault();
        const { userName, password, email } = e.target.elements;
        const response = await this.context.register(userName.value, password.value, email.value);

        if (response === true){
            this.props.toggle();
            await this.context.login(userName.value, password.value);
        }
        else {
            this.context.logout();
        }
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Start achieving your goals today!</h3>
                <input placeholder="Username" name="userName" required />
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