import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import {
    TextField,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import { myContext } from "../view/HorarioScreen";
import { types } from "../../reducers/types";
import { RPRRadio } from "../RPRRadio/RPRRadio";

const useStyles = makeStyles((theme) => ({
    colap: {
        borderRadius: "10px",
        backgroundColor: "#f9f1f9",
        padding: "30px",
        justifyContent: "center",
    },
    input: {
        width: "2em",
        marginLeft: "2em",
    },
    inputName: {
        width: "6em",
        marginLeft: "2em",
    },
    inputRadio: {
        width: "150px",
        marginLeft: "3em",
        display: "inline-block",
    },
}));

export default function SimpleCollapse() {
    const { state, dispatch } = useContext(myContext);
    const { trabajadores, conf } = state;
    const { checked, index } = conf;

    return (
        <SimpleCollapse1 props={{ dispatch, trabajadores, checked, index }} />
    );
}

function SimpleCollapse1({ props }) {
    const { trabajadores, dispatch, checked, index } = props;
    const classes = useStyles();

    let { name, tienda, pista, manana, tarde, noche, domingo } = trabajadores[
        index
    ];

    const handleInputChangeTienda = (e) => {
        dispatch({
            type: types.setTienda,
            payload: { value: e.target.value * 1, index },
        });
    };
    const handleInputChangePista = (e) => {
        dispatch({
            type: types.setPista,
            payload: { value: e.target.value * 1, index },
        });
    };

    const handleInputChangeManana = (e) => {
        dispatch({
            type: types.setManana,
            payload: { value: e.target.value * 1, index },
        });
    };

    const handleInputChangeTarde = (e) => {
        dispatch({
            type: types.setTarde,
            payload: { value: e.target.value * 1, index },
        });
    };

    const handleInputChangeNoche = (e) => {
        dispatch({
            type: types.setNoche,
            payload: { value: e.target.value * 1, index },
        });
    };

    const handleInputChangeName = (e) => {
        dispatch({
            type: types.setName,
            payload: { value: e.target.value, index },
        });
    };

    const handleChangeDomingo = (e) => {
        dispatch({
            type: types.setDomingo,
            payload: { value: e.target.value, index },
        });
    };

    return (
        <Collapse className={classes.colap} in={checked}>
            <div>
                <Typography variant="h5">{name}</Typography>
                <TextField
                    className={classes.input}
                    label="tienda"
                    value={tienda}
                    margin="dense"
                    onChange={handleInputChangeTienda}
                    //onBlur={handleBlur}
                    inputProps={{
                        step: 1,
                        min: 0,
                        max: 5,
                        type: "number",
                        "aria-labelledby": "input-slider",
                    }}
                />
                <TextField
                    className={classes.input}
                    label="Pista"
                    value={pista}
                    margin="dense"
                    onChange={handleInputChangePista}
                    //onBlur={handleBlur}
                    inputProps={{
                        step: 1,
                        min: 0,
                        max: 5,
                        type: "number",
                        "aria-labelledby": "input-slider",
                    }}
                />
                <TextField
                    className={classes.input}
                    label="Mañana"
                    value={manana}
                    margin="dense"
                    onChange={handleInputChangeManana}
                    //onBlur={handleBlur}
                    inputProps={{
                        step: 1,
                        min: 0,
                        max: 5,
                        type: "number",
                        "aria-labelledby": "input-slider",
                    }}
                />
                <TextField
                    className={classes.input}
                    label="Tarde"
                    value={tarde}
                    margin="dense"
                    onChange={handleInputChangeTarde}
                    //onBlur={handleBlur}
                    inputProps={{
                        step: 1,
                        min: 0,
                        max: 5,
                        type: "number",
                        "aria-labelledby": "input-slider",
                    }}
                />
                <TextField
                    className={classes.input}
                    label="Noche"
                    value={noche}
                    margin="dense"
                    onChange={handleInputChangeNoche}
                    //onBlur={handleBlur}
                    inputProps={{
                        step: 1,
                        min: 0,
                        max: 5,
                        type: "number",
                        "aria-labelledby": "input-slider",
                    }}
                />
                <TextField
                    className={classes.inputName}
                    label="Nombre"
                    value={name}
                    margin="dense"
                    onChange={handleInputChangeName}
                    //onBlur={handleBlur}
                    inputProps={{
                        step: 1,
                        min: 0,
                        max: 5,
                        type: "text",
                        "aria-labelledby": "input-slider",
                    }}
                />
                <div className={classes.inputRadio}>
                    <InputLabel id="demo-simple-select-label">
                        Domingo
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={domingo}
                        onChange={handleChangeDomingo}
                    >
                        <MenuItem value={0}>otro</MenuItem>
                        <MenuItem value={1}>tarde</MenuItem>
                        <MenuItem value={2}>libre</MenuItem>
                    </Select>
                </div>
            </div>
        </Collapse>
    );
}
