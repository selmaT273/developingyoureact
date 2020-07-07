import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Goals from './goals/index';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/auth/login';
// import Home from './home/index';

function App() {
  // const { mode } = useTheme();

  return (
    <>
      <Header />
      <Login />
      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route> */}
        <Route exact path="/Goals">
          <Goals />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
