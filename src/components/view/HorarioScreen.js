import React, { useState, useEffect } from "react";
import setHorarioOrden from "../../helpers/setHorario";
import { trabajadores } from "../../info/trabajadores";
import SimpleTable from "../table/table";
import { Container } from "@material-ui/core";
import { mydefault } from "./default";

export const HorarioScreen = () => {
    const [mistrabajadores, setMistrabajadores] = useState(trabajadores);
    const [trabs, setTrabas] = useState(mydefault);
    const options = trabajadores.map((item) => item.name);
    console.log(trabs);

    useEffect(() => {
        let myset = setHorarioOrden(mistrabajadores);

        if (!comprobacion(myset)) {
            console.log("true");
            myset = [...mydefault, myset[5], myset[6]];
        }

        setTrabas(myset);
    }, [mistrabajadores]);

    return (
        <div style={{ paddingTop: "50px" }}>
            <Container maxWidth="md">
                <SimpleTable
                    setTrabas={setMistrabajadores}
                    trabs={trabs}
                    options={options}
                />
            </Container>
        </div>
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
