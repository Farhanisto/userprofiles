import React, { useContext, useCallback, useEffect, useState } from 'react';

const StoreContext = React.createContext({
  filteredProfiles: [],
  getProfiles: () => {}
});

const StoreProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(null);
  const [filteredProfiles, setFilteredProfiles] = useState(null);

  const getProfiles = useCallback(async () => {
    const res = await fetch('https://randomuser.me/api/?results=6');
    const profilesdata = await res.json();

    return setProfiles(profilesdata.results);
  }, []);
  console.log(profiles, '----profiles');
  const findProfiles = useCallback(() => {
    const foundprofiles = [...profiles];

    setFilteredProfiles(foundprofiles);
  }, [profiles]);

  useEffect(() => {
    if (profiles) {
      findProfiles();
    }
  }, [profiles, findProfiles]);

  return (
    <StoreContext.Provider
      value={{ filteredProfiles: filteredProfiles, getProfiles: getProfiles }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }

  return context;
};

export { StoreProvider, useStore };
