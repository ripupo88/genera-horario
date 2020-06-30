import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { SelectTable } from "../select/select";

const useStyles = makeStyles({
    table: {
        minWidth: 200,
        padding: "0 !important",
    },
});

export default function SimpleTable({ setTrabas, trabs, options }) {
    const classes = useStyles();

    const cabecera = ["?", "L", "M", "X", "J", "V", "S", "D"];
    const col1 = ["Mt", "M", "Tt", "T", "N", "L", "L"];

    return (
        <TableContainer component={Paper}>
            <Table
                className={classes.table}
                size="small"
                aria-label="simple table"
            >
                <TableHead>
                    <TableRow>
                        {cabecera.map((item, i) => {
                            return (
                                <TableCell
                                    key={item + 1}
                                    style={{ backgroundColor: "#5982DE" }}
                                    hey={item}
                                    align="center"
                                >
                                    {item}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trabs.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell
                                style={{ backgroundColor: "#5982DE" }}
                                align="center"
                                key={i}
                                component="th"
                                scope="row"
                            >
                                {col1[i]}
                            </TableCell>
                            {row.map((cel, x) => {
                                return (
                                    <TableCell
                                        style={
                                            cel.esRenganche
                                                ? { backgroundColor: "#64BBFA" }
                                                : i > 4
                                                ? { backgroundColor: "#64BBFA" }
                                                : { backgroundColor: "#fff" }
                                        }
                                        key={i + "i" + x}
                                        component="th"
                                        scope="row"
                                    >
                                        <SelectTable
                                            setTrabas={setTrabas}
                                            key={i + "x" + x}
                                            myKey={[i, x]}
                                            value={cel.name[0]}
                                            options={options}
                                        />
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
