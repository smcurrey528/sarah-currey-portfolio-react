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
            <Route  path="/articles" component={Articles} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/about" component={About} />
            <Route  path="/amazon" component={Amazon} />
            <Route  path="/airbnb" component={Airbnb} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/benandjerry" component={BenAndJerry} />
            <Route  path="/other" component={Other} />
            <Route exact path="/" component={Home} />

          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;

