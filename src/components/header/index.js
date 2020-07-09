import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import { faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Goals from '../../goals/index';

import useTheme from '../../contexts/theme.js';
import useAuth from '../../contexts/auth.js';


export default function Header() {

  const theme = useTheme();
  const auth = useAuth();
    
    return(
      <header className={theme.mode}>
          <div className="account-bar">
          <span className="user-icon"><FontAwesomeIcon icon={faUser} /></span>
          <span className="settings-icon"><FontAwesomeIcon icon={faCog} onClick={() => theme.toggleMode()}/></span>
          <span className="logout-icon"><FontAwesomeIcon icon={faSignOutAlt}onClick={() => auth.logout()}/></span>
          </div>
          <h1>Developing You</h1>
        <nav>
          <a href="/">Home</a>
          <NavLink exact to="/Goals">Goals</NavLink>
          <a href="/About">About</a>
        </nav>
      </header>
    );
  }
