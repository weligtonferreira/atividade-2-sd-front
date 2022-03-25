import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user }}>
      {children}
    </AuthContext.Provider>
  );
};
