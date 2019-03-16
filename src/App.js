import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CommonHeader from './components/CommonHeader';
import Home from './routes/Home';
import News from './routes/News';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CommonHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
        </Switch>
      </div>
    );
  }
}

export default App;
