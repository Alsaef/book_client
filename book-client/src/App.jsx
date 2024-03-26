import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './pages/sehard/NavBar';

const App = () => {
  return (
    <div>
      <NavBar/>
<Outlet></Outlet>
    </div>
  );
};

export default App;