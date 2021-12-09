import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';

const Filter = ({ setFilter, sortedData }) => {
  const [maxValue, setMaxValue] = useState(
    sortedData[sortedData.length - 1].price
  );
  const [minValue, setMinValue] = useState(sortedData[0].price);
  const changeMaxValue = (e) => {
    setMaxValue(e.target.value);
    setFilter(Number(minValue), e.target.value);
  };
  const changeMinValue = (e) => {
    setMinValue(e.target.value);
    setFilter(e.target.value, Number(maxValue));
  };
  return (
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-number"
        label="Минимальная сумма"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={minValue}
        onChange={changeMinValue}
        size="small"
      />
      <TextField
        id="outlined-number"
        label="Максимальная цена"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={maxValue}
        onChange={changeMaxValue}
        size="small"
      />
    </Box>
  );
};
export default Filter;
