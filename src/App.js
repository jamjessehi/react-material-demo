import React from "react";
import AppearanceProvider from "AppearanceProvider";
import ThemeProvider from "ThemeProvider";

import Page from "Page";

function App() {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <Page />
      </ThemeProvider>
    </AppearanceProvider>
  );
}

export default App;
