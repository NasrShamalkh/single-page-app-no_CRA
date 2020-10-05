import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Page1 from './components/page1/page1';
import Page2 from './components/page2/page2';
import NavBar from './components/navBar/navBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/page1' component={Page1} />
        <Route path='/page2' component={Page2} />
      </Switch>
    </Router>
  );
};
export default App;
