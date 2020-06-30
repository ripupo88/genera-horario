import React from "react";
import Select from "@material-ui/core/Select";
import { withStyles, InputBase } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

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

export const SelectTable = ({ myKey, setTrabas, value = "0", options }) => {
    const puestos = ["Mt", "M", "Tt", "T", "N", "L", "L1"];

    const handleChange = (e) => {
        setTrabas((trab) => {
            let newtrab = [...trab];
            let old;
            for (const t of newtrab) {
                if (t.name === e.target.value) {
                    old = t.semana.horario[myKey[1]].valor;
                    t.semana.horario[myKey[1]].valor = puestos[myKey[0]];
                    t.semana.horario[myKey[1]].forced = true;
                }
            }
            for (const tt of newtrab) {
                if (
                    tt.semana.horario[myKey[1]].valor === puestos[myKey[0]] &&
                    tt.name !== e.target.value
                ) {
                    tt.semana.horario[myKey[1]].valor = old;
                    tt.semana.horario[myKey[1]].forced = false;
                }
            }

            return newtrab;
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
