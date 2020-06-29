import React, { useState, useEffect } from "react";
import setHorarioOrden from "../../helpers/setHorario";
import { trabajadores } from "../../info/trabajadores";
import SimpleTable from "../table/table";
import { Container } from "@material-ui/core";

export const HorarioScreen = () => {
    const [mistrabajadores, setMistrabajadores] = useState(trabajadores);
    const [trabs, setTrabas] = useState(setHorarioOrden(trabajadores));
    const options = trabajadores.map((item) => item.name);

    useEffect(() => {
        setTrabas(setHorarioOrden(mistrabajadores));
        console.log("efe");
    }, [mistrabajadores]);

    return (
        <Container maxWidth="md">
            <SimpleTable
                setTrabas={setMistrabajadores}
                trabs={trabs}
                options={options}
            />
        </Container>
    );
};
