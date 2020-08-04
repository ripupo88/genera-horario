import React, { useEffect, createContext, useReducer } from "react";
import SimpleTable from "../table/table";
import Chips from "../chip/Chip";
import SimpleCollapse from "../fade/Fade";
import { trabajadoresReducer } from "../../reducers/trabajadoresReducer";
import { FinalChanges } from "../FinalChanges/FinalChanges";
import { Instrucciones } from "../temp/Instrucciones";
import { store } from "../../store/store";
import { generaHorario } from "../../actions/generaSemana";

export const myContext = createContext();

const init = () => {
    if (!!localStorage.getItem("store")) {
        console.log("si");
        return JSON.parse(localStorage.getItem("store"));
    }
    return store;
};

export const HorarioScreen = () => {
    const [state, dispatch] = useReducer(trabajadoresReducer, {}, init);

    const { trabajadores } = state;

    useEffect(() => {
        generaHorario(state.trabajadores).then(dispatch);
        localStorage.setItem("store", JSON.stringify(state));
    }, [trabajadores]);

    return (
        <myContext.Provider value={{ state, dispatch }}>
            <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                <SimpleTable />
                <Chips />
                <SimpleCollapse />
                {/* <FinalChanges /> */}
                <Instrucciones />
            </div>
        </myContext.Provider>
    );
};
