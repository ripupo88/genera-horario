import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { TrabajadoresContext } from "../view/HorarioScreen";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Chip.css";

const useStyles = makeStyles((theme) => ({
    chip: {
        marg: "100px",
    },
    root: {
        marginTop: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1.2),
        },
    },
}));

export default function Chips() {
    const classes = useStyles();
    const { trabajadores, setChecked, setIndex, index } = useContext(
        TrabajadoresContext
    );

    const handleClick = (indexLocal) => {
        if (index === indexLocal) {
            setChecked((chec) => !chec);
        } else {
            setIndex(indexLocal);
            setChecked(true);
        }
    };

    return (
        <div className={classes.root}>
            <SettingsIcon className="icono" color="primary" />

            {trabajadores.map(({ name }, i) => {
                return (
                    <Chip
                        key={name}
                        className={classes.chip}
                        label={name}
                        clickable
                        onClick={() => handleClick(i)}
                        color="primary"
                        variant="outlined"
                        deleteIcon={<DoneIcon />}
                    />
                );
            })}
        </div>
    );
}
