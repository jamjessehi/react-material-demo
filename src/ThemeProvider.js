import React, { createContext, useReducer, useEffect, useContext } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AppearanceContext } from "AppearanceProvider";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { theme as themeStorage } from "utils/storageManager";

const initial = themeStorage.getItem() || {};

const CHANGE = "CHANGE";
const CHANGE_PALETTE = "CHANGE_PALETTE";

export const changeAction = value => ({
  type: CHANGE,
  value
});

export const changePaletteAction = value => ({
  type: CHANGE_PALETTE,
  value
});

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        ...action.value
      };

    case CHANGE_PALETTE:
      const prevPalette = state.palette || {};

      return {
        ...state,
        palette: {
          ...prevPalette,
          ...action.value
        }
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
      dispatch(changePaletteAction({ type }));
    }
  }, [prefersDarkMode, appearanceContext]);

  useEffect(() => {
    themeStorage.setItem(state);
  }, [state]);

  return (
    <ThemeProvider theme={createMuiTheme(state)}>
      <ThemeDispatch.Provider value={dispatch}>
        {children}
      </ThemeDispatch.Provider>
    </ThemeProvider>
  );
};
