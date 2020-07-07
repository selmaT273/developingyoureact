import React from 'react';
// import link from 'react-router-dom';
import './header.scss';
import { faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTheme from '../../contexts/theme.js'


export default function Header() {

  const theme = useTheme();
    
    return(
      <header className={theme.mode}>
          <button onClick={() => theme.toggleMode()}>{theme.mode} mode</button>
          <div className="account-bar">
          <span className="user-icon"><FontAwesomeIcon icon={faUser} /></span>
          <span className="settings-icon"><FontAwesomeIcon icon={faCog} /></span>
          <a href="/Logout"><FontAwesomeIcon icon={faSignOutAlt} /></a>
          </div>
          <h1>Developing You</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/Goals">Goals</a>
          <a href="/About">About</a>
        </nav>
      </header>
    );
  }
