import React from 'react';
import './styles/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Landing from './components/Landing';
import Videos from './components/Videos';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Project from './components/Project';
import Tutorial from './components/Tutorial';
import Tutorials from './components/Tutorials';
// import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/tutorials'>
            <Tutorials />
          </Route>
          <Route exact path='/videos'>
            <Videos />
          </Route>
          {/*
          <Route exact path='/blog'>
            <Blog />
          </Route>
          */}
          <Route
            exact
            path='/projects/:id'
            render={props => <Project {...props} />}
          />
          <Route
            exact
            path='/tutorials/:id'
            render={props => <Tutorial {...props} />}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
