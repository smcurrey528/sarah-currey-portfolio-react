import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './Articles';
import Contact from './Contact';
import About from './About';
import Amazon from './Amazon';
import Airbnb from './Airbnb';
import BenAndJerry from './BenAndJerry';
import Other from './Other.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
            <Route exact path="/amazon" component={Amazon} />
            <Route exact path="/airbnb" component={Airbnb} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/benandjerry" component={BenAndJerry} />
            <Route exact path="/other" component={Other} />

          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;

