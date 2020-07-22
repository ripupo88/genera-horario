import { types } from "../reducers/types";
import setHorarioOrden from "../helpers/setHorario";

export const generaHorario = async (trabajadoresObject) => {
    const horarioGenerado = setHorarioOrden(trabajadoresObject, true);
    return {
        type: types.generaHorario,
        payload: horarioGenerado,
    };
};
