import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
 // const [user, setUser] = useState(null);
 const [user, setUser] = useState(() => {
  // Intenta obtener el usuario desde el sessionStorage al cargar la página
  const storedUser = sessionStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
});

// Actualiza el sessionStorage cada vez que cambia el usuario
useEffect(() => {
  sessionStorage.setItem('user', JSON.stringify(user));
}, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);