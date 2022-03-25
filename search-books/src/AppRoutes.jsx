import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import { AuthContext } from './contexts/Auth';

export default function AppRoutes() {
  const Auth = useContext(AuthContext);
  const Private = () => {};

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}
