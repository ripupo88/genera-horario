import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxWidth: "100%",
    minWidth: 200,
    padding: 0,
    margin: 0,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Lolo", "Lolo", "Victor", "Edward", "Edward"),
  createData("Lolo", "Lolo", "Victor", "Edward", "Edward"),
  createData("Lolo", "Lolo", "Victor", "Edward", "Edward"),
  createData("Lolo", "Lolo", "Victor", "Edward", "Edward"),
  createData("Lolo", "Lolo", "Victor", "Edward", "Edward"),
  createData("Lolo", "Lolo", "Victor", "Edward", "Edward"),
  createData("Lolo", "Lolo", "Victor", "Edward", "Edward"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">L</TableCell>
            <TableCell align="center">M</TableCell>
            <TableCell align="center">X</TableCell>
            <TableCell align="center">J</TableCell>
            <TableCell align="center">V</TableCell>
            <TableCell align="center">S</TableCell>
            <TableCell align="center">D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={new Date().getTime()}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
