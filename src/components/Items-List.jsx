import * as React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Filter from "./Filter";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function ItemList() {
  const data = useSelector((state) => state.rows);
  const [filteredData, setFilteredData] = useState(data);
  const history = useHistory();
  const sortedData = [...data].sort((a, b) => a.price - b.price);
  const setFilter = (min, max) => {
    if (max >= min) {
      const filteredData = data.filter(
        (item) => item.price <= max && item.price >= min
      );
      setFilteredData(filteredData);
    } else {
      setFilteredData([]);
    }
  };
  return (
    <>
      <Filter setFilter={setFilter} sortedData={sortedData} />
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" gutterBottom component="span">
                  Наименование
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" gutterBottom component="span">
                  Цена
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" gutterBottom component="span">
                  Изготовитель
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6" gutterBottom component="span">
                  Количество
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row) => (
              <TableRow
                hover={true}
                onClick={() => {
                  history.push(`/${row.id}`);
                }}
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.vendor}</TableCell>
                <TableCell align="right">{row.pack}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
