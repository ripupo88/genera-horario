import { types } from "./types";

export const trabajadoresReducer = (trab, action) => {
    const puestos = ["Mt", "M", "Tt", "T", "N", "L", "L1"];
    let newTrab;
    switch (action.type) {
        case types.generaHorario:
            // Aqui la logica
            return trab;
        case types.setManual:
            //logica aqui
            newTrab = [...trab];
            let value = action.payload.value;
            let myKey = action.payload.keys;
            let old;
            for (const t of newTrab) {
                if (t.name === value) {
                    old = t.semana.horario[myKey[1]].valor;
                    t.semana.horario[myKey[0]].valor = puestos[myKey[1]];
                    t.semana.horario[myKey[0]].forced = true;
                }
            }
            for (const tt of newTrab) {
                if (
                    tt.semana.horario[myKey[0]].valor === puestos[myKey[1]] &&
                    tt.name !== value
                ) {
                    tt.semana.horario[myKey[0]].valor = old;
                    //tt.semana.horario[myKey[1]].forced = false;
                }
            }
            return newTrab;

        case types.setTienda:
            newTrab = [...trab];
            newTrab[action.payload.index].tienda = action.payload.value;
            return newTrab;
        case types.setPista:
            newTrab = [...trab];
            newTrab[action.payload.index].pista = action.payload.value;
            return newTrab;
        case types.setManana:
            newTrab = [...trab];
            newTrab[action.payload.index].manana = action.payload.value;
            return newTrab;
        case types.setTarde:
            newTrab = [...trab];
            newTrab[action.payload.index].tarde = action.payload.value;
            return newTrab;
        case types.setNoche:
            newTrab = [...trab];
            newTrab[action.payload.index].noche = action.payload.value;
            return newTrab;
        case types.reset:
            newTrab = action.payload;
            return newTrab;

        default:
            return trab;
    }
};
