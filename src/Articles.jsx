import React, { Component } from 'react';
import './Articles.css';
import Nav from './Nav';
import Footer from './Footer';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Articles extends Component {
  render() {
    return (
        <React.Fragment>
          <Nav/>

      <Card className="card"> <a href="https://medium.com/datadriveninvestor/using-d3-in-your-react-app-3-things-to-know-a2026c17e677">
        <CardImg top width="100%" src="https://cdn-images-1.medium.com/max/800/1*cuHmndYevKsJUol14LlWtA.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">Using D3 in your React App: 3 Things to Know</CardTitle>
        </CardBody>
        </a>
      </Card>

      <Card className="card"> <a href="https://medium.com/@sarah.currey/how-i-built-my-first-obama-themed-javascript-game-b06f7c62af4c">
        <CardImg top width="100%" src="https://cdn-images-1.medium.com/max/800/1*lVFAM9cTiO40pV6d63dT_Q.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">How I Built My First (Obama Themed) JavaScript Game</CardTitle>
        </CardBody>
        </a>
      </Card>

      <Card className="card"> <a href="https://medium.com/@sarah.currey/https-medium-com-sarah-currey-5-tips-to-surviving-your-first-week-at-a-coding-bootcamp-d1e1a9021dba">
        <CardImg top width="100%" src="https://cdn-images-1.medium.com/max/800/1*6I5Rbsj3tQ8D0Hwa9vH9zw.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="card-title">5 Tips for Surviving your First Week at a Coding Bootcamp</CardTitle>
        </CardBody>
        </a>
      </Card>

          <Footer/>

         </React.Fragment>

    );
  }
}

export default Articles;
