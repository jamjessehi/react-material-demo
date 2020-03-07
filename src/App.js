import React from "react";
import AppearanceProvider from "./AppearanceProvider";
import ThemeProvider from "./ThemeProvider";
import Paper from "@material-ui/core/Paper";
import Appearance from "./Appearance";

function App() {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <Paper>
          <Appearance />
        </Paper>
      </ThemeProvider>
    </AppearanceProvider>
  );
}

export default App;
