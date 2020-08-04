import { types } from "../reducers/types";

export const resetAction = async (trabajadores) => {
    for (const trab of trabajadores) {
        trab.semana = {
            fecha: "",
            horario: [
                { valor: null, forced: false },
                { valor: null, forced: false },
                { valor: null, forced: false },
                { valor: null, forced: false },
                { valor: null, forced: false },
                { valor: null, forced: false },
                { valor: null, forced: false },
            ],
        };
        console.log(trab);
    }
    return {
        type: types.reset,
        payload: trabajadores,
    };
};
