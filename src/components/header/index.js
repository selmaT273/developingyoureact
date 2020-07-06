import React from 'react';
// import link from 'react-router-dom';

import './header.scss';

export default function Header() {
    
    return(
      <header>
        <span class="header-container">
          <h1>Developing You</h1>
          <button>Log in</button>
        </span>
        <nav>
          <a href="/">Home</a>
          <a href="/Goals">Goals</a>
          <a href="/About">About</a>
        </nav>
      </header>
    );
  }
