import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return(
      <footer className="site-footer clearfix">
  <div className="foot">

    <div className="site-footer-left">
      <span className="nugget">
        Drop me a line
      </span>
      <p className="footer">
        Send me an <a href="mailto:curreysarah28@gmail.com">email</a> or click the icons below <br/>
      </p>

      <a href="mailto:curreysarah28@gmail.com">
        <svg viewBox="0 0 100 64">
          <g>
            <polygon points="50,45 50,45 50,45 0,9.5 0,64 100,64 100,9.5  "/>
            <polygon points="99.5,0 0.5,0 50,35.1   "/>
          </g>
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/sarahcurrey/" target="_blank">
        <svg viewBox="0 0 38.3 38.3">
          <g>
            <rect x="0.8" y="12.8" width="7.9" height="25.5"></rect>
            <ellipse cx="4.7" cy="4.7" rx="4.7" ry="4.7"></ellipse>
            <path d="M21.3,24.9c0-3.6,1.7-5.7,4.8-5.7c2.9,0,4.3,2.1,4.3,5.7c0,3.7,0,13.4,0,13.4h7.9c0,0,0-9.3,0-16.2
              c0-6.8-3.9-10.1-9.3-10.1s-7.7,4.2-7.7,4.2v-3.4h-7.6v25.5h7.6C21.3,38.3,21.3,28.8,21.3,24.9z"></path>
          </g>
        </svg>
      </a>

      <a href="http://github.com/smcurrey528" target="_blank">
        <svg viewBox="0 0 32.6 31.8">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5
            c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1
            c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4
            C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7
            c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5
            c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C32.6,7.3,25.3,0,16.3,0z"></path>
        </svg>
      </a>
    </div>

    <div className="site-footer-right">
      <span className="nugget">
        Technologies
      </span>
      <p className="technologies">
        I built this site with React, JavaScript, HTML, CSS Grid & Flexbox, MapBox API, <a href='https://reactstrap.github.io/'> ReactStrap </a> and <a href="https://fonts.google.com/selection?selection.family=Karla|Vollkorn" target="blank">Google Fonts</a>
        —Design Inspiration from
          <a href="https://www.linkedin.com/in/jessiejren/" target="_blank">
            <svg viewBox="0 0 13.9 13.9">
            <polygon points="2,4 2,10.2 7,13.9 11.9,10.2 11.9,4 7,7.7   "></polygon>
            <rect fill="none" width="13.9" height="13.9"></rect>
            </svg>
          </a>
      </p>
      <span className="copyright">
        © 2018 Sarah Currey
      </span>
    </div>

  </div>
</footer>
      )
  }
}

export default Footer;
