import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Login from './components/auth/login';
import GoalDetails from './goaldetails/index';

function App() {
  // const { mode } = useTheme();

  return (
    <>
      <Header />
      <Login />
      <GoalDetails />
      <Footer />
    </>
  );
}

export default App;
