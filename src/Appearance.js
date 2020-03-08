import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Box from "@material-ui/core/Box";

import { AppearanceContext, AppearanceDispatch } from "AppearanceProvider";

export default () => {
  const appearanceContext = useContext(AppearanceContext);
  const appearanceDispatch = useContext(AppearanceDispatch);

  function handleChange(e) {
    const type = e.target.value;

    appearanceDispatch(type);
  }

  return (
    <Box py={2}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Appearance</FormLabel>
        <RadioGroup
          value={appearanceContext}
          aria-label="position"
          name="position"
          row
        >
          <FormControlLabel
            value="light"
            control={<Radio color="primary" />}
            label="Light"
            onChange={handleChange}
          />
          <FormControlLabel
            value="dark"
            control={<Radio color="primary" />}
            label="Dark"
            onChange={handleChange}
          />
          <FormControlLabel
            value="auto"
            control={<Radio color="primary" />}
            label="Auto"
            onChange={handleChange}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
