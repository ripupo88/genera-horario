import React, { useContext } from "react";
import Select from "@material-ui/core/Select";
import { withStyles, InputBase } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { myContext } from "../view/HorarioScreen";
import { types } from "../../reducers/types";

const BootstrapInput = withStyles((theme) => ({
    input: {
        width: "3.5em",
        position: "relative",
        fontSize: "0.9em",
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
            borderRadius: 0,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
        },
    },
}))(InputBase);

export const SelectTable = ({ myKey, value, options }) => {
    const puestos = ["Mt", "M", "Tt", "T", "N", "L", "L1"];
    const { dispatch } = useContext(myContext);

    const handleChange = (e) => {
        dispatch({
            type: types.setManual,
            payload: {
                keys: [myKey[1], myKey[0]],
                value: e.target.value,
            },
        });
    };
    return (
        <Select
            key={myKey}
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={value}
            onChange={handleChange}
            input={<BootstrapInput />}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {options.map((item, i) => {
                return (
                    <MenuItem key={i} value={item}>
                        {item}
                    </MenuItem>
                );
            })}
        </Select>
    );
};
