import React, { useContext } from "react";
import { useTheme, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import * as colors from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";
import CheckIcon from "@material-ui/icons/Check";
import { ThemeDispatch, changePaletteAction } from "ThemeProvider";

const sizes = [40, 45, 50, 55];

const COLOR = Object.entries(colors).filter(([prop]) => prop !== "common");

export default () => {
  const theme = useTheme();

  const { palette: { primary = {}, secondary = {} } = {} } = theme;

  const PALETTE = [
    {
      name: "primary",
      main: primary.main
    },
    {
      name: "secondary",
      main: secondary.main
    }
  ];

  const themeDispatch = useContext(ThemeDispatch);

  function handleClick(name, color) {
    themeDispatch(
      changePaletteAction({
        [name]: color
      })
    );
  }

  return (
    <div>
      <Typography variant="subtitle1" gutterBottom>
        Color tool
      </Typography>
      <Grid container>
        {PALETTE.map(({ main, name }, i) => (
          <Grid key={i} item xs={6}>
            <Box textAlign="center" p={2}>
              <Typography
                style={{ textTransform: "capitalize" }}
                color="textPrimary"
                variant="subtitle2"
                gutterBottom
              >
                {name}
              </Typography>
              <Box mt={1}>
                <Grid container justify="flex-start">
                  {COLOR.map(([prop, color], j) => {
                    const cur = createMuiTheme({
                      palette: { [name]: color }
                    });
                    const curMain = cur.palette[name].main;

                    return (
                      <Grid key={j} item>
                        <Box
                          style={{ cursor: "pointer" }}
                          onClick={() => handleClick(name, color)}
                          width={sizes}
                          height={sizes}
                          color="common.white"
                          bgcolor={curMain}
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          {main === curMain && <CheckIcon />}
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
