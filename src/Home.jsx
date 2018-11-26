import React, { Component } from 'react';
import './Home.css';
import Nav from './Nav';
import Footer from './Footer';
import Work from './Work';

class Home extends Component {
  render() {
    return (
        <React.Fragment>
          <Nav/>
          <Work/>
          <Footer/>
         </React.Fragment>

    );
  }
}

export default Home;
