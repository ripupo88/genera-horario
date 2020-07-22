import React, { useState, useEffect, createContext, useReducer } from "react";
import setHorarioOrden from "../../helpers/setHorario";
import { trabajadores } from "../../info/trabajadores";
import SimpleTable from "../table/table";
import { mydefault } from "./default";
import Chips from "../chip/Chip";
import SimpleCollapse from "../fade/Fade";
import { trabajadoresReducer } from "../../reducers/trabajadoresReducer";
import { FinalChanges } from "../FinalChanges/FinalChanges";
import { Instrucciones } from "../temp/Instrucciones";
import { Snackbar } from "@material-ui/core";
import { store } from "../../store/store";
import { generaHorario } from "../../actions/generaSemana";

export const myContext = createContext();

// const init = () => {
//     if (localStorage.getItem("trabajadoresStorage") !== null) {
//         return JSON.parse(localStorage.getItem("trabajadoresStorage"));
//     } else {
//         return trabajadores;
//     }
// };

export const HorarioScreen = () => {
    const [state, dispatch] = useReducer(
        trabajadoresReducer,
        store
        // init
    );

    const [desabled, setDesabled] = useState(true);
    const [alert, setAlert] = React.useState(false);

    const [trabs, setTrabas] = useState(mydefault);

    const options = trabajadores.map((item) => item.name);

    const handleClose = () => {
        setAlert(false);
    };

    useEffect(() => {
        // let semanaGenerada;
        // try {
        //     semanaGenerada = setHorarioOrden(state, automat);
        // } catch {
        //     semanaGenerada = setHorarioOrden(state, true);
        //     //setAlert(true);
        // }
        // if (!comprobacion(semanaGenerada)) {
        //     //myset = [...mydefault, myset[5], myset[6]];
        //     setDesabled(true);
        // } else {
        //     setDesabled(false);
        // }
        //localStorage.setItem("trabajadoresStorage", JSON.stringify(state));
        //generaHorario(store.trabajadores).then(dispatch);
        // setTrabas(semanaGenerada);
    }, []);

    return (
        <myContext.Provider value={{ state, dispatch }}>
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
        </myContext.Provider>
    );
};

const comprobacion = (test) => {
    let sale = true;
    test[5].map((item) => {
        if (item.name[0] === "") {
            sale = false;
            return "";
        }
        return "";
    });
    test[6].map((item) => {
        if (item.name[0] === "") {
            sale = false;
            return "";
        }
        return "";
    });
    return sale;
};
