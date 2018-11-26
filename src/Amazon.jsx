import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Amazon.css';

class Amazon extends Component {
  render() {
    return(
      <React.Fragment>
      <Nav/>
      <div className="page">
      <div className="amazon">
      <header>
  <img class="logo" src="http://www.turnerduckworth.com/media/filer_public/86/18/86187bcc-752a-46f4-94d8-0ce54b98cd46/td-amazon-smile-logo-01-large.jpg"/>
  <h1>Amazon Remake<i>· Full Stack Developer</i></h1>
  <span class="thumb-nugget">November-December 2018</span>
  <br/>
  <span class="thumb-nugget"><a href="https://git.generalassemb.ly/smcurrey528/finalproject">View on GitHub </a></span>
  <br/>
  <span class="thumb-nugget"> <a href="#">Demo: Coming Soon </a></span>
<br/><br/><br/>
</header>
  <img src="https://media.giphy.com/media/2sfIbI18sPPWg8Tr3P/giphy.gif"/>
  <br/><br/>


<section class="row">

  <div class="two-thirds column">
    <span class="nugget">Overview</span>
    <p> When <a href="http://www.amazon.com" target="_blank">
    Amazon</a> announced it's new East Coast headquarters coming to NYC, I decided
    that I would explore recreating Amazon's website. However, Amazon's current design is very
    overwhelming with too many things trying to grab your attention at once, so I decided to create a full stack web application
    of Amazon using a simplified design. I used React on the front-end while applying Express, Node, and PostgreSQL on the back-end.</p>
  </div>


  <div class="one-third column">
    <span class="nugget">Hats worn</span>
    <ul class="list">
        <li>💻&nbsp;&nbsp; React Front-end Dev</li>
        <li>📤&nbsp;&nbsp; Backend Express Dev</li>
        <li>✍&nbsp;&nbsp; Wireframing</li>
        <li>💬&nbsp;&nbsp; PostgreSQL</li>
        <li>🎁&nbsp;&nbsp; Shopify API</li>
        <li>💸&nbsp;&nbsp; E-commerce Dev</li>
        <li>🌺&nbsp;&nbsp; ReactStrap</li>
        <li>📢&nbsp;&nbsp; Visual design</li>
        <li>📈&nbsp;&nbsp; Project Management</li>

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
export default Amazon;
