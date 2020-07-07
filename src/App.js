import React from 'react';

import useTheme from './contexts/theme';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/auth/login';

function App() {
  const { mode } = useTheme();

  return (
    <>
      <div className={mode}>
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
