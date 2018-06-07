import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './shared/Footer'
import Discover from './pages/Discover'
import Community from './pages/Community'
import Theme from './pages/Theme'
import Index from './pages/Index'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/theme" component={Theme} />
          <Route exact path="/" component={Index} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
