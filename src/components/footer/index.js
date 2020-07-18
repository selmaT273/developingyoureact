import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

export default function Footer() {
    
    return(
        <footer className="footer">
         <Link className="github" to={{ pathname: "https://www.github.com/selmaT273" }} target="_blank">@selmaT273</Link>
          
        </footer>
    );
  }
