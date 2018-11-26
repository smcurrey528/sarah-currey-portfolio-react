import React, {Component} from 'react';
import './Airbnb.css';
import Nav from './Nav';
import Footer from './Footer';

class Airbnb extends Component {
  render() {
    return(
      <React.Fragment>
      <Nav/>
      <div className="page">
      <div className="amazon">
      <header>
  <img class="logo" src="https://i.imgur.com/4PAHoNj.png"/>
  <h1>Airbnb Remake<i>· Front-End Developer</i></h1>
  <span class="thumb-nugget">November 2018</span>
  <br/>
  <span class="thumb-nugget"><a href="https://github.com/smcurrey528/firebnb">View on GitHub </a></span>
  <br/>
  <span class="thumb-nugget"> <a href="https://dillon-airbnb.herokuapp.com/">Demo </a></span>
<br/><br/><br/>
</header>
  <img src="https://media.giphy.com/media/LVsQ0RdyFpvBZcPNLH/giphy.gif"/>
  <br/><br/>


<section class="row">

  <div class="two-thirds column">
    <span class="nugget">Overview</span>
    <p><a href="http://www.airbnb.com" target="_blank">
     Airbnb</a> is a popular and widely known house-sharing app with over 200 million users around the world.
     I led a team of four to develop a full stack application of Airbnb's webpage,
     where we created a backend with Express, Node, and PostgreSQL. My main role revolved around using React and Reactstrap to recreate
     the front-end design and functionality of Airbnb.</p>
  </div>


  <div class="one-third column">
    <span class="nugget">Hats worn</span>
    <ul class="list">

        <li>✍&nbsp;&nbsp; Wireframing</li>
        <li>💬&nbsp;&nbsp; PostgreSQL</li>
        <li>♻️&nbsp;&nbsp; Prototyping</li>
        <li>🌺&nbsp;&nbsp; ReactStrap</li>
        <li>📢&nbsp;&nbsp; Visual design</li>
        <li>📈&nbsp;&nbsp; Project Management</li>
        <li>💻&nbsp;&nbsp; React Front-end Dev</li>
        <li>📤&nbsp;&nbsp; Backend Express</li>
      </ul>
  </div>

</section>

<hr/>
</div>
</div>
<Footer/>
</React.Fragment>
      )
  }
}

export default Airbnb;

