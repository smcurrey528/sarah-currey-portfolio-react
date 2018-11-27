import React,  {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import MapBox from './MapBox';
import './Contact.css';

class Contact extends Component {
  render() {
    return(
      <React.Fragment>
      <Nav/>
      <div className="total">
        <div className="all">
<br/>
  <section className="row">
  <section className="photos">
        <img  className="headshot" src="https://i.imgur.com/FonrfDe.png"/>
        <h3 className="overlay-title">I also go by the nickname "Scurrey"</h3>
  </section>
   <div className="rightside">
    <div className="one-third column">
      <span className="nugget">
        Contact
      </span>
      <ul className="list">
        <li>✉️&nbsp;&nbsp; <a href="mailto:curreysarah28@gmail.com" target="_blank">Email</a></li>
        <li>📝&nbsp;&nbsp; <a href="https://www.linkedin.com/in/sarahcurrey/" target="_blank">LinkedIn</a></li>

      </ul>
    </div>
      <div className="two-thirds column">
        <span className="nugget">
          Say hello
        </span>
        <p>
          Always open to freelance work if it is a good fit. <a href="mailto:curreysarah28@gmail.com">Email</a> is best way to contact me, but you can always message me on  <a href="https://www.linkedin.com/in/sarahcurrey/" target="_blank">LinkedIn</a> too.
        </p>
      </div>
      </div>



    </section>
</div>

      </div>
      <Footer/>
      </React.Fragment>
      )
  }
}

export default Contact;
