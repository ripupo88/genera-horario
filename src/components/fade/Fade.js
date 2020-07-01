import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import { TextField } from "@material-ui/core";
import { TrabajadoresContext } from "../view/HorarioScreen";

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    colap: {
        justifyContent: "center",
    },
    input: {
        width: "2em",
        marginLeft: "2em",
    },
}));

export default function SimpleCollapse() {
    const classes = useStyles();
    const {
        mistrabajadores,
        setMistrabajadores,
        trabajadores,
        checked,
        index,
    } = useContext(TrabajadoresContext);
    let { name, tienda, pista } = mistrabajadores[index];
    const [tiendaEstado, setTiendaEstado] = useState(0);

    const handleInputChangeTienda = (e) => {
        trabajadores[index].tienda = e.target.value * 1;
        setMistrabajadores(trabajadores);
        setTiendaEstado(tienda);
        console.log(tienda);
    };

    return (
        <Collapse className={classes.colap} in={checked}>
            <h2>{name}</h2>
            <TextField
                className={classes.input}
                label="tienda"
                value={tiendaEstado}
                margin="dense"
                onChange={handleInputChangeTienda}
                //onBlur={handleBlur}
                inputProps={{
                    step: 1,
                    min: 0,
                    max: 4,
                    type: "number",
                    "aria-labelledby": "input-slider",
                }}
            />
            <TextField
                className={classes.input}
                label="Pista"
                value={pista}
                margin="dense"
                //onChange={handleInputChangeTienda}
                //onBlur={handleBlur}
                inputProps={{
                    step: 1,
                    min: 0,
                    max: 4,
                    type: "number",
                    "aria-labelledby": "input-slider",
                }}
            />
        </Collapse>
    );
}
