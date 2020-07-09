import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Goals from './goals/index';

import useTheme from './contexts/theme';

import Header from './components/header';
import Footer from './components/footer';
import Login from './components/auth/login';
import Home from './home/index';

import GoalDetails from './goaldetails/index';

import About from './aboutUs/index'


function App() {
  const { mode } = useTheme();

  return (
    <>
    <div className={mode}>
      <Header />
      <Login />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Goals">
          <Goals />
        </Route>
        <Route exact path="/Goals/:id">
          <GoalDetails />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
      </Switch>
      <Footer />
     </div>
    </>
  );
}

export default App;
