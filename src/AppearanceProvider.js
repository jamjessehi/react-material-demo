import React, { createContext, useState, useEffect } from "react";
import { appearance as appearanceStorage } from "utils/storages";

const initial = appearanceStorage.getItem() || "light";

export const AppearanceContext = createContext(initial);

export const AppearanceDispatch = createContext(() => {});

export default ({ children }) => {
  const [state, setState] = useState(initial);

  useEffect(() => {
    appearanceStorage.setItem(state);
  }, [state]);

  return (
    <AppearanceContext.Provider value={state}>
      <AppearanceDispatch.Provider value={setState}>
        {children}
      </AppearanceDispatch.Provider>
    </AppearanceContext.Provider>
  );
};
