import React from "react";
import { Autocomplete, TextField } from "@mui/material";

// removed value and onselect from input
const AutoSelect2 = ({ options, label, width = 300 }) => {
  return (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      style={{ width }}
    />
  );
};

export default AutoSelect2;
