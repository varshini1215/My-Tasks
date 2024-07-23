import React, { createContext, useState } from 'react';
// Context API
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {
        name: '',
        email: '',
      },
      settings: {
        theme: 'light',
        notifications: true,
      },
    
  });

  const setGlobalState = (newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <GlobalContext.Provider value={{ state, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};