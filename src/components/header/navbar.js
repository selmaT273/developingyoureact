import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { MenuItems } from './menuitems';
import { If } from '../if';
import Modal from '../modal';
import Register from '../auth/register';
import { Button } from './register-button';
import { AuthContext } from '../../contexts/auth';

class Navbar extends Component {
    state = { clicked: false };
    state = {
        showRegister: false,
      };
    
  
    toggleRegisterModal = () => {
      this.setState(oldState => ({ showRegister: !oldState.showRegister}));
    }
  

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

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

    render() {
        const {showRegister} = this.state;

        
        return(
            <nav className="navbar-items">
                <h1 className="navbar-logo">Developing You<i className="fas fa-child"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <NavLink className={item.cName} exact to={item.url}>{item.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
                <If condition={showRegister}>
                <Modal title="RegisterModal" onClose={this.toggleRegisterModal}>
                <Register toggle={this.toggleRegisterModal}/>
                </Modal>
                </If>
                <Button className="register-button" type="button" onClick={this.toggleRegisterModal}>Register</Button>
            </nav>
        )
    }
}

export default Navbar; 