import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { myContext } from "../view/HorarioScreen";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Chip.css";
import { types } from "../../reducers/types";

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
    const { state, dispatch } = useContext(myContext);
    const { trabajadores, conf } = state;
    const { index } = conf;
    return <Chips1 props={{ trabajadores, index, dispatch }} />;
}

function Chips1({ props }) {
    const { trabajadores, index, dispatch } = props;
    const classes = useStyles();

    const handleClick = (indexLocal) => {
        if (index === indexLocal) {
            dispatch({ type: types.toggleCheck });
        } else {
            dispatch({ type: types.setIndex, payload: indexLocal });
            dispatch({ type: types.checkedTrue });
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
