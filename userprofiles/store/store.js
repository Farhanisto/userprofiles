import React, { useContext, useCallback, useEffect, useState } from 'react';

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const [profiles, setProfiles] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [search, setSearch] = useState('');

  const getProfiles = useCallback(async () => {
    const res = await fetch('https://randomuser.me/api/?results=6');
    const profilesdata = await res.json();

    return setProfiles(profilesdata.results);
  }, []);

  const findProfiles = useCallback(() => {
    let foundprofiles = [...profiles];

    if (search) {
      foundprofiles = foundprofiles.filter(
        (profile) => profile.name.first == search
      );
    }

    setFilteredProfiles(foundprofiles);
  }, [profiles, search]);

  const searchTerm = useCallback((term) => {
    setSearch(term);
  }, []);

  useEffect(() => {
    if (profiles) {
      findProfiles();
    }
  }, [profiles, findProfiles]);

  return (
    <StoreContext.Provider
      value={{
        filteredProfiles,
        search,
        getProfiles,
        searchTerm
      }}
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
