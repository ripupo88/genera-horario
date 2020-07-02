import React, { useContext } from "react";
import {
    Select,
    MenuItem,
    Typography,
    InputLabel,
    FormControlLabel,
    FormControl,
} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TrabajadoresContext } from "../view/HorarioScreen";

const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        width: "50px",
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "Roboto",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    formControl: {
        textAlign: "left",
        margin: theme.spacing(0.5),
        //minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const FinalChanges = () => {
    const classes = useStyles();
    let horarios = ["Mt", "M", "Tt", "T", "N", "L", "L1"];
    let dias = [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
    ];
    const { trabajadores, desabled } = useContext(TrabajadoresContext);
    return (
        !desabled &&
        trabajadores.map((trabajador) => {
            return (
                <>
                    <div style={{ textAlign: "center" }}>
                        <Typography variant="h6">{trabajador.name}</Typography>
                        {trabajador.semana.horario.map((horario, ind) => {
                            return (
                                <>
                                    <FormControl
                                        className={classes.formControl}
                                    >
                                        <InputLabel>{dias[ind]}</InputLabel>
                                        <Select
                                            labelId="demo-customized-select-label"
                                            id="demo-customized-select"
                                            value={
                                                horario.valor
                                                    ? horario.valor
                                                    : ""
                                            }
                                            onChange={() =>
                                                console.log("changed")
                                            }
                                            input={<BootstrapInput />}
                                        >
                                            <MenuItem value={horario.valor}>
                                                <em>None</em>
                                            </MenuItem>
                                            {horarios.map(
                                                (horarioEstablecido) => {
                                                    return (
                                                        <MenuItem
                                                            value={
                                                                horarioEstablecido
                                                            }
                                                        >
                                                            {horarioEstablecido ===
                                                            "L1"
                                                                ? "L"
                                                                : horarioEstablecido}
                                                        </MenuItem>
                                                    );
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </>
                            );
                        })}
                    </div>
                    <hr
                        style={{
                            margin: "40px 0 40px 0",
                            borderTop: "0.5px solid #eee",
                        }}
                    />
                </>
            );
        })
    );
};
