import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Results from "./pages/Books";
import Book from "./pages/Book";
import { AuthContext } from "./contexts/Auth";
import LogoutButton from "./components/LogoutButton";

export default function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  const Private = ({ children }) => {
    if (!isAuthenticated) return <Navigate to="/login" />;

    return children;
  };

  return (
    <Router>
      {isAuthenticated && <LogoutButton />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Private children={<Home />} />} />
        <Route path="/books" element={<Private children={<Results />} />} />
        <Route path="/books/:id" element={<Private children={<Book />} />} />
      </Routes>
    </Router>
  );
}
