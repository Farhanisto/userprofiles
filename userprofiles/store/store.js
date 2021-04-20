import React, { useContext } from 'react';

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const value = '#ff0000';

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a StoreProvider');
  }

  return context;
};

export { StoreProvider, useStore };
