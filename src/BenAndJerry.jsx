import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import './BenAndJerry.css';

class BenAndJerry extends Component {
  render() {
    return(
         <React.Fragment>
      <Nav/>
      <div className="page">
      <div className="icecream">
      <header>
  <img class="logo" src="https://pbs.twimg.com/profile_images/1250824905/3551598358_59ddb6d200.jpg"/>
  <h1>Ben & Jerry's Ice Cream<i>· Full Stack Developer</i></h1>
  <span class="thumb-nugget">November 2018</span>
  <br/>
  <span class="thumb-nugget"><a href="https://git.generalassemb.ly/smcurrey528/js-react-express-crud-hw">View on GitHub </a></span>
  <br/>
  <span class="thumb-nugget"> <a href="https://sarah-icecream-deploy.herokuapp.com/">Demo </a></span>
<br/><br/><br/>
</header>
  <img src="https://media.giphy.com/media/g4Lg18u4Z1LZ26RQfI/giphy.gif"/>
  <br/><br/>


<section class="row">

  <div class="two-thirds column">
    <span class="nugget">Overview</span>
    <p>One of my favorite ice cream brands is <a href="https://www.benjerry.com/" target="_blank">
    Ben & Jerry's </a> because who doesn't love ice cream?! This is a CRUD application where I built out the
    front-end UI in React using an ice cream database backend. Feel free to click on the demo and add in an ice cream. 😊 </p>
  </div>


  <div class="one-third column">
    <span class="nugget">Hats worn</span>
    <ul class="list">
        <li>💻&nbsp;&nbsp; React UI</li>
        <li>📤&nbsp;&nbsp; Backend Express</li>
        <li>💬&nbsp;&nbsp; PostgreSQL</li>


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

export default BenAndJerry;
