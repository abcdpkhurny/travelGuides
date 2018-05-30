import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './shared/Header'
import Discover from './pages/Discover'
import Index from './pages/Index'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        主页内容？123
        <Index />
        <Switch>
          <Route exact path="/" component={Discover} />
        </Switch>
      </div>
    );
  }
}

export default App;
