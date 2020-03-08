import React, { useContext } from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default () => {
  return (
    <Box textAlign="center" color="text.hint" py={2}>
      <Typography variant="caption" component="footer">
        © 2020 Jesse
      </Typography>
    </Box>
  );
};
