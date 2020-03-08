import React, { createContext, useReducer, useEffect, useContext } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AppearanceContext } from "AppearanceProvider";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const initial = {};

const CHANGE = "CHANGE";

export const changeAction = value => ({
  type: CHANGE,
  value
});

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        ...action.value
      };

    default:
      return {};
  }
};

export const ThemeDispatch = createContext(() => {});

export default ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [state, dispatch] = useReducer(reducer, initial);
  const appearanceContext = useContext(AppearanceContext);

  useEffect(() => {
    const mode = prefersDarkMode ? "dark" : "light";

    let type = appearanceContext;

    if (type) {
      type = type === "auto" ? mode : type;
      dispatch(changeAction({ palette: { type } }));
    }
  }, [prefersDarkMode, appearanceContext]);

  return (
    <ThemeProvider theme={createMuiTheme(state)}>
      <ThemeDispatch.Provider value={dispatch}>
        {children}
      </ThemeDispatch.Provider>
    </ThemeProvider>
  );
};
