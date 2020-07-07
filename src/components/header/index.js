import React from 'react';
// import link from 'react-router-dom';
import './header.scss';
import { faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    
    return(
      <header>
          <div class="account-bar">
          <a href=""><FontAwesomeIcon icon={faUser} /></a>
          <a href=""><FontAwesomeIcon icon={faCog} /></a>
          <a href=""><FontAwesomeIcon icon={faSignOutAlt} /></a>
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
