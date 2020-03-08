import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Appearance from "Appearance";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default
  }
}));

export default () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="sm">
      <Appearance />
    </Container>
  );
};
