import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="site-intro">
            <div className="site-text">
             Hey I'm Sarah, a collaborative full
             <br/>
             stack web developer based in NYC.
            </div>
          </div>
          <nav className="site-nav">
                    <ul className="site-menu site-menu-animated">
              <li className="site-menu-item category-blog">
                <a href="/">Work</a>
              </li>
              <li className="site-menu-item category-work">
                <a href="/articles/">Articles</a>
              </li>
              <li className="site-menu-item category-contact">
                <a href="/about/">About</a>
              </li>
              <li className="site-menu-item category-shop">
                <a href="/contact/">Chat</a>
              </li>
            </ul>
         </nav>

         </React.Fragment>

    );
  }
}

export default Nav;
