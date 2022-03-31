import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [client, setClient] = useState(null);

  const login = clientData => {
    // setClient(clientData);
    try {
      console.log(`${client} client state`);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setClient(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!client, client, setClient, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
