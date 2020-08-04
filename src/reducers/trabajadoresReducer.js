import { types } from "./types";
import { store } from "../store/store";

export const trabajadoresReducer = (state, action) => {
    const puestos = ["Mt", "M", "Tt", "T", "N", "L", "L1"];
    let newTrab;
    switch (action.type) {
        case types.generaHorario:
            return { ...state, semanaDefault: action.payload };

        case types.setManual:
            //logica aqui
            newTrab = [...state.trabajadores];
            let value = action.payload.value;
            console.log("value", value);
            let myKey = action.payload.keys;
            console.log("myKey", myKey);
            for (const t of newTrab) {
                if (t.name === value) {
                    t.semana.horario[myKey[1]].valor = puestos[myKey[0]];
                    t.semana.horario[myKey[1]].forced = true;
                }
            }
            console.log(newTrab);
            for (const tt of newTrab) {
                if (
                    tt.semana.horario[myKey[1]].valor === puestos[myKey[0]] &&
                    tt.name !== value
                ) {
                    console.log("salta");
                    tt.semana.horario[myKey[1]].valor = null;
                    tt.semana.horario[myKey[1]].forced = false;
                }
            }
            return { ...state, trabajadores: newTrab };

        case types.toggleCheck:
            return {
                ...state,
                conf: { ...state.conf, checked: !state.conf.checked },
            };

        case types.checkedTrue:
            return { ...state, conf: { ...state.conf, checked: true } };

        case types.setIndex:
            return { ...state, conf: { ...state.conf, index: action.payload } };

        case types.setTienda:
            newTrab = [...state.trabajadores];
            newTrab[action.payload.index].tienda = action.payload.value;
            return { ...state, trabajadores: newTrab };

        case types.setPista:
            newTrab = [...state.trabajadores];
            newTrab[action.payload.index].pista = action.payload.value;
            return { ...state, trabajadores: newTrab };

        case types.setManana:
            newTrab = [...state.trabajadores];
            newTrab[action.payload.index].manana = action.payload.value;
            return { ...state, trabajadores: newTrab };

        case types.setTarde:
            newTrab = [...state.trabajadores];
            newTrab[action.payload.index].tarde = action.payload.value;
            return { ...state, trabajadores: newTrab };

        case types.setNoche:
            newTrab = [...state.trabajadores];
            newTrab[action.payload.index].noche = action.payload.value;
            return { ...state, trabajadores: newTrab };

        case types.setName:
            newTrab = [...state.trabajadores];
            newTrab[action.payload.index].name = action.payload.value;
            return { ...state, trabajadores: newTrab };

        case types.reset:
            return { ...state, trabajadores: [...state.trabajadores] };

        default:
            return state;
    }
};
