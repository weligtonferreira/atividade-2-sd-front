import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [client, setClient] = useState(null);

  const login = (clientData) => {
    setClient(clientData);
  };

  const logout = () => {
    setClient(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!client, client, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
