import React from 'react';
// import link from 'react-router-dom';

import './header.scss';

export default function Header() {
    
    return(
      <header>
        <h1>Developing You</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Goals">Goals</a></li>
            <li><a href="/About">About</a></li>
          </ul>
        </nav>
      </header>
    );
  }
