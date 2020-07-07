import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Login from './components/auth/login';

function App() {
  // const { mode } = useTheme();

  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
