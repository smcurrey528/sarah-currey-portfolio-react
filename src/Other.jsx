import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './Other.css';

class Other extends Component {
  render() {
    return(
      <React.Fragment>
      <Nav/>
      <div className="page">
      <div className="amazon">
      <header>
  <img class="logo" src="https://duaw26jehqd4r.cloudfront.net/items/2h0q0s3f1R1v1z1h0113/Image%202018-11-23%20at%205.25.01%20PM.png?X-CloudApp-Visitor-Id=6876e04c950b8195c72dd5652dbf34ac&v=f9b4b802"/>
  <h1>Come Back Barack<i>· Front-End Developer</i></h1>
  <span class="thumb-nugget">September 2018</span>
  <br/>
  <span class="thumb-nugget"><a href="https://git.generalassemb.ly/smcurrey528/come-back-barack">View on GitHub </a></span>
  <br/>
  <span class="thumb-nugget"> <a href="https://pages.git.generalassemb.ly/smcurrey528/come-back-barack/">Demo</a></span>
<br/><br/><br/>
</header>
  <img src="https://media.giphy.com/media/lz684PNXQDXA8swONq/giphy.gif"/>
  <br/><br/>


<section class="row">

  <div class="two-thirds column">
    <span class="nugget">Overview</span>
    <p>Inspired by the SNL skit, <a href="https://share.vidyard.com/watch/BqWnKgTpLjZzvvLA6D96EC" target="_blank"> "Come Back Barack" </a>, I created a game using vanilla JavaScript, HTML, CSS and Materialize.
     "Come Back Barack" is an interactive clickable video game where the player will click to gain points and avoid the obstacles in order to win. The objective is to energize Obama so he will come back from vacation, but the user will need to catch "Liberal Snowflakes" to keep him energized. However, there are red "Make America Great Again" Hats that
      are obstacles and if the user clicks on the red hat then Obama goes back on vacation.</p>
  </div>


  <div class="one-third column">
    <span class="nugget">Hats worn</span>
    <ul class="list">
        <li>⭐&nbsp;&nbsp; Concepting</li>
        <li>👓&nbsp;&nbsp; Wireframing</li>
        <li>🔸&nbsp;&nbsp; CSS Animation</li>
        <li>📢&nbsp;&nbsp; Visual design</li>
        <li>💻&nbsp;&nbsp; Front-End Dev</li>
        <li>💥&nbsp;&nbsp; Collision Detection</li>

      </ul>
  </div>

</section>

<hr/>
</div>
  <div className="amazon">
      <header>
  <img class="logo" src="https://i.imgur.com/EzA6UAl.png"/>
  <h1>QualLi: Quality of Life App<i>· Front-End Developer</i></h1>
  <span class="thumb-nugget">October 2018</span>
  <br/>
  <span class="thumb-nugget"><a href="https://git.generalassemb.ly/smcurrey528/finalproject">View on GitHub </a></span>
  <br/>
  <span class="thumb-nugget"> <a href="http://qualili.surge.sh/">Demo </a></span>
<br/><br/><br/>
</header>
  <img src="https://media.giphy.com/media/17mHaT6ab91nCxo1EA/giphy.gif"/>
  <br/><br/>


<section class="row">

  <div class="two-thirds column">
    <span class="nugget">Overview</span>
    <p>Using the <a href="https://teleport.org/" target="_blank"> Teleport API, </a>
    I created QualLi which is a web application that can show you the quality of life scores
    of over 300 world-class cities. The data visualization is created with JavaScript library, D3, and React
    Components. Try searching New York, London, and Tokyo to see where they score! </p>
  </div>


  <div class="one-third column">
    <span class="nugget">Hats worn</span>
    <ul class="list">
       <li>⭐&nbsp;&nbsp; Concepting</li>
        <li>👓&nbsp;&nbsp; Wireframing</li>
        <li>📚&nbsp;&nbsp; React Dev</li>
        <li>📡&nbsp;&nbsp; REST API</li>
        <li>📈&nbsp;&nbsp; D3 Data visualization</li>

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
export default Other;
