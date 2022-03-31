import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Results from './pages/Books';
import Book from './pages/Book';
import { AuthContext } from './contexts/Auth';

export default function AppRoutes() {
  const Private = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) return <Navigate to='/login' />;

    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Results />} />
        <Route path='/books/:id' element={<Book />} />
      </Routes>
    </Router>
  );
}
