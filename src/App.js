import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Discover from './pages/Discover'
import Index from './pages/Index'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/" component={Index} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
