import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './shared/Footer'
import Discover from './pages/Discover'
import Community from './pages/Community'
import Theme from './pages/Theme'
import Index from './pages/Index'

import Personal from './components/Personal';
import Login from './components/Login';
import PersonalList from './components/PersonalList';
import UpUserName from './components/UpUserName';
import UpPhone from './components/UpPhone';
import UpSex from './components/UpSex';
import Register from './components/Register';
import Detailed from './components/Detailed';
import FindScenery from './components/FindScenery';
import Shiyan from './components/Shiyan';
import ForumList from './components/ForumList';
import Collect from './components/Collect';

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

          <Route exact path="/personal" component={Personal}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/personalList" component={PersonalList}/>
            <Route exact path="/upUserName" component={UpUserName}/>
            <Route exact path="/upPhone" component={UpPhone}/>
            <Route exact path="/upSex" component={UpSex}/>
            <Route exact path="/findScenery" component={FindScenery}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/detailed" component={Detailed}/>
            <Route exact path="/shiyan" component={Shiyan}/>
            <Route exact path="/forumList" component={ForumList}/>
            <Route exact path="/collect" component={Collect}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
