import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Appearance from "Appearance";
import Footer from "Footer";

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
        <Appearance />
      </div>
      <Footer />
    </Container>
  );
};
