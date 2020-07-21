import React, { useState, useEffect, createContext, useReducer } from "react";
import setHorarioOrden from "../../helpers/setHorario";
import { trabajadores } from "../../info/trabajadores";
import SimpleTable from "../table/table";
import { Container, Snackbar } from "@material-ui/core";
import { mydefault } from "./default";
import Chips from "../chip/Chip";
import SimpleCollapse from "../fade/Fade";
import { trabajadoresReducer } from "../../reducers/trabajadoresReducer";
import { FinalChanges } from "../FinalChanges/FinalChanges";
import { Instrucciones } from "../temp/Instrucciones";

export const TrabajadoresContext = createContext();

const init = () => {
    if (localStorage.getItem("trabajadoresStorage") !== null) {
        return JSON.parse(localStorage.getItem("trabajadoresStorage"));
    } else {
        return trabajadores;
    }
};

export const HorarioScreen = () => {
    const [index, setIndex] = useState(0);
    const [checked, setChecked] = useState(false);
    const [desabled, setDesabled] = useState(true);
    const [automat, setAutomat] = useState(false);
    const [trabs, setTrabas] = useState(mydefault);

    const options = trabajadores.map((item) => item.name);

    const [alert, setAlert] = React.useState(false);

    const handleClose = () => {
        setAlert(false);
    };

    const [trabajadoresObject, dispatch] = useReducer(
        trabajadoresReducer,
        trabajadores,
        init
    );

    useEffect(() => {
        let myset;
        try {
            myset = setHorarioOrden(trabajadoresObject, automat);
        } catch {
            myset = setHorarioOrden(trabajadoresObject);
            setAlert(true);
        }

        if (!comprobacion(myset)) {
            myset = [...mydefault, myset[5], myset[6]];
            setDesabled(true);
        } else {
            setDesabled(false);
        }
        localStorage.setItem(
            "trabajadoresStorage",
            JSON.stringify(trabajadoresObject)
        );
        setTrabas(myset);
    }, [trabajadoresObject, automat]);

    return (
        <TrabajadoresContext.Provider
            value={{
                desabled,
                automat,
                setAutomat,
                trabajadores: trabajadoresObject,
                dispatch,
                checked,
                setChecked,
                index,
                setIndex,
            }}
        >
            <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                <SimpleTable trabs={trabs} options={options} />
                <Snackbar
                    autoHideDuration={10000}
                    severity="error"
                    anchorOrigin={{ vertical: "center", horizontal: "center" }}
                    open={alert}
                    onClose={handleClose}
                    message="Parametros muy restrictivos, no se puede generar un horario"
                    key={9898}
                />
                <Chips />
                <SimpleCollapse />
                {/* <FinalChanges /> */}
                <Instrucciones />
            </div>
        </TrabajadoresContext.Provider>
    );
};

const comprobacion = (test) => {
    let sale = true;
    test[5].map((item) => {
        if (item.name[0] === "") {
            sale = false;
            return;
        }
    });
    test[6].map((item) => {
        if (item.name[0] === "") {
            sale = false;
            return;
        }
    });
    return sale;
};
