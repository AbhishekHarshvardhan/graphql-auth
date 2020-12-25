import React from 'react';
import Header from './Header';

const App = ({ children }) => {
  return (
    <div>
      <Header />
      <br />
      <br />

      <div className='container'>{children}</div>
    </div>
  );
};

export default App;
