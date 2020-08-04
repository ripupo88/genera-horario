import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { SelectTable } from "../select/select";
import "./table.css";
import { myContext } from "../view/HorarioScreen";
import { types } from "../../reducers/types";
import { Button } from "@material-ui/core";
import { generaHorario } from "../../actions/generaSemana";
import { store } from "../../store/store";
import { resetAction } from "../../actions/resetAction";
import { trabajadoresReducer } from "../../reducers/trabajadoresReducer";
import { fijarAction } from "../../actions/fijarAction";

const useStyles = makeStyles({
    table: {
        minWidth: 200,
        padding: "0 !important",
    },
});

export default function SimpleTable() {
    const { state, dispatch } = useContext(myContext);

    const { trabajadores, semanaDefault } = state;
    return <SimpleTable1 props={{ semanaDefault, trabajadores, dispatch }} />;
}

function SimpleTable1({ props }) {
    const { dispatch, trabajadores, semanaDefault } = props;

    const options = trabajadores.map((item) => item.name);

    const classes = useStyles();

    const handleGenerar = (e) => {
        e.preventDefault();
        generaHorario(trabajadores).then(dispatch);
    };

    const reiniciaTodo = () => {
        resetAction(trabajadores).then(dispatch);
        //localStorage.removeItem("trabajadoresStorage");
    };

    const handleFijar = () => {
        fijarAction(trabajadores).then(dispatch);
    };

    const cabecera = ["", "L", "M", "X", "J", "V", "S", "D"];
    const col1 = ["M", "Mt", "T", "Tt", "N", "L", "L"];

    return (
        <>
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
                        {semanaDefault.map((row, i) => (
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
                                                    ? {
                                                          backgroundColor:
                                                              "#E88B66",
                                                      }
                                                    : i > 1 && i < 4
                                                    ? {
                                                          backgroundColor:
                                                              "#e7e7e7",
                                                      }
                                                    : i > 4
                                                    ? {
                                                          backgroundColor:
                                                              "#64BBFA",
                                                      }
                                                    : {
                                                          backgroundColor:
                                                              "#fff",
                                                      }
                                            }
                                            key={i + "i" + x}
                                            component="th"
                                            scope="row"
                                        >
                                            {i < 5 ? (
                                                <p>{cel.name[0]}</p>
                                            ) : (
                                                <SelectTable
                                                    key={i + "x" + x}
                                                    myKey={[i, x]}
                                                    value={cel.name[0]}
                                                    options={options}
                                                />
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="row">
                <div className="col text-left">
                    <Button
                        type="submit"
                        size="small"
                        color="primary"
                        className={classes.margin}
                        onClick={reiniciaTodo}
                    >
                        Volver a empezar
                    </Button>
                </div>
                <div className="col text-center">
                    <Button
                        type="submit"
                        size="small"
                        color="primary"
                        className={classes.margin}
                        onClick={handleFijar}
                    >
                        Fijar libres
                    </Button>
                </div>
                <div className="col text-right">
                    <Button
                        type="submit"
                        size="small"
                        color="primary"
                        className={classes.margin}
                        onClick={handleGenerar}
                    >
                        Generar
                    </Button>

                    {/* <FormControlLabel
                    className="cheked"
                    style={{ color: "#5164C2" }}
                    disabled={desabled}
                    control={
                        <Checkbox
                            onChange={() => setAutomat((auto) => !auto)}
                            checked={automat}
                            color="primary"
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                        />
                    }
                    label="Automatico"
                /> */}
                </div>
            </div>
        </>
    );
}
