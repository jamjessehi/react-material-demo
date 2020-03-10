import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Appearance from "Appearance";
import Buttons from "Buttons";
import ColorTool from "ColorTool";
import Footer from "Footer";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default
  },
  content: {
    flex: 1
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="sm">
      <div className={classes.content}>
        <AppBar position="fixed">
          <Toolbar>Toolbar</Toolbar>
        </AppBar>
        <Toolbar />

        <Box mt={2}>
          <Appearance />
        </Box>
        <Box mt={2}>
          <Buttons />
        </Box>
        <Box mt={2}>
          <ColorTool />
        </Box>
      </div>
      <Footer />
    </Container>
  );
};
