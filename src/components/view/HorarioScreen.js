import React, { useState, useEffect, createContext } from "react";
import setHorarioOrden from "../../helpers/setHorario";
import { trabajadores } from "../../info/trabajadores";
import SimpleTable from "../table/table";
import { Container } from "@material-ui/core";
import { mydefault } from "./default";
import Chips from "../chip/Chip";
import SimpleCollapse from "../fade/Fade";

export const TrabajadoresContext = createContext();

export const HorarioScreen = () => {
    const [index, setIndex] = useState(0);
    const [checked, setChecked] = useState(false);
    const [mistrabajadores, setMistrabajadores] = useState(trabajadores);
    const [trabs, setTrabas] = useState(mydefault);
    const options = trabajadores.map((item) => item.name);

    useEffect(() => {
        let myset = setHorarioOrden(mistrabajadores);

        if (!comprobacion(myset)) {
            myset = [...mydefault, myset[5], myset[6]];
        }
        setTrabas(myset);
    }, [mistrabajadores]);

    return (
        <TrabajadoresContext.Provider
            value={{
                mistrabajadores,
                setMistrabajadores,
                trabajadores,
                checked,
                setChecked,
                index,
                setIndex,
            }}
        >
            <div style={{ paddingTop: "50px" }}>
                <Container maxWidth="md">
                    <SimpleTable
                        setTrabas={setMistrabajadores}
                        trabs={trabs}
                        options={options}
                    />
                    <Chips />
                    <SimpleCollapse />
                    <h3>mi otra cosa para poner</h3>
                </Container>
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
