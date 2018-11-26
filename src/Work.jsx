import React, {Component} from 'react';
import './Work.css';

class Work extends Component {

  render() {
    return(
      <div className="page">
      <div className="wrap">
        <div className="container">

  <section className="work">
    <div className="post-list clearfix">

      <a className="post-item" href="/airbnb/">
        <div className="post-item-img other"><img src="https://media.giphy.com/media/LVsQ0RdyFpvBZcPNLH/giphy.gif"/><h3 className="overlay-title">Front-End Developer</h3></div>
        <div className="post-item-label">
          <center><div className="post-item-icon"><img src="https://i.imgur.com/4PAHoNj.png"/></div>
          <h2 className="subhead">Airbnb</h2>
          <div className="thumb-nugget">November 2018</div></center>
        </div>
      </a>

      <a className="post-item" href="/amazon/">
        <div className="post-item-img"><img src="https://media.giphy.com/media/2sfIbI18sPPWg8Tr3P/giphy.gif"/><h3 className="overlay-title">Full Stack Developer</h3></div>
        <div className="post-item-label">
          <center><div className="post-item-icon"><img src="http://www.turnerduckworth.com/media/filer_public/86/18/86187bcc-752a-46f4-94d8-0ce54b98cd46/td-amazon-smile-logo-01-large.jpg"/></div>
          <h2 className="subhead">Amazon</h2>
          <div className="thumb-nugget">December 2018</div></center>
        </div>
      </a>

      <a className="post-item" href="/benandjerry">
        <div className="post-item-img"><img onmouseover="on()" src="https://media.giphy.com/media/g4Lg18u4Z1LZ26RQfI/giphy.gif"/><h3 className="overlay-title">Full Stack Developer</h3></div>
        <div className="post-item-label">
          <center><div className="post-item-icon"><img src="https://pbs.twimg.com/profile_images/1250824905/3551598358_59ddb6d200.jpg"/></div>
          <h2 className="subhead">Ben & Jerry's </h2>
          <div className="thumb-nugget">October 2018</div></center>
        </div>
      </a>

      <a className="post-item" href="/other/">
        <div className="post-item-img"><img src="https://media.giphy.com/media/lz684PNXQDXA8swONq/giphy.gif"/><h3 className="overlay-title">Where I started</h3></div>
        <div className="post-item-label">
          <center><div className="post-item-icon"><img src="https://i.imgur.com/LE2NpEb.png"/></div>
          <h2 className="subhead">Other Projects</h2>
          <div className="thumb-nugget">2018</div></center>
        </div>
      </a>

    </div>
  </section>


<br/><br/>
  <section className="skills">

    <div className="two-thirds column">
      <span className="nugget">Hi there</span>

          <p>I’m a full stack developer based in NYC, currently open to new full-time and freelance opportunities.  I believe that the best results are achieved through cross-functional team work with empathetic and people-centric approaches. Résumé <a href="https://www.linkedin.com/in/sarahcurrey/" target="_blank">here</a>.
          </p>

    </div>

    <div className="one-third column">

      <span className="nugget">Skills</span>
        <p><span className="pill">JavaScript</span> <span className="pill">React.js</span> <span className="pill">D3</span> <span className="pill">Wireframing</span> <span className="pill">HTML5</span> <span className="pill">CSS3</span> <span className="pill">REST API</span> <span className="pill">Shopify API</span><span className="pill">Node.js</span><span className="pill">Express</span><span className="pill">MySQL & PostgresSQL</span><span className="pill">CRUD</span><span className="pill">Project Management</span><span className="pill">Customer Success</span>
        </p>

    </div>

  </section>




<p> </p>


</div>

      </div>
    </div>
      )
  }
}
export default Work;
