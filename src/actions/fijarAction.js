import { types } from "../reducers/types";

export const fijarAction = async (trabajadores) => {
    for (const trab of trabajadores) {
        for (const dia of trab.semana.horario) {
            if (dia.valor === "L" || dia.valor === "L1") {
                dia.forced = true;
            }
        }
    }
    return {
        type: types.reset,
        payload: trabajadores,
    };
};
