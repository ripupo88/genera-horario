import React from "react";
import "./INstrucciones.css";

export const Instrucciones = () => {
    return (
        <div className="pa">
            <h2>Instrucciónes de uso</h2>
            <p>
                EL asistente para generar el horario, cómo su nombre lo indica
                solo es una ayuda a la hora de crear el horario y no limita para
                nada la cantidad de trabajadores que pueden descansar o trabajar
                en una jornada.
            </p>
            <ol>
                <li>
                    Primero se debe seleccionar todos los trabajadores que
                    estarán librando
                </li>
                <li>
                    Una vez selecionados tienes la opcion de poner el generador
                    automatico a funcionar
                </li>
                <li>
                    Para hacer modificaciones, lo recomendado es hacer cambios
                    en los parametros y evitar siempre que sea posible hacer
                    modificaciones directamente en la tabla
                </li>
                <li>
                    Si no le termina de convencer el horario generado
                    automaticamente despues de modificar los parametros; puede
                    hacer cambios directos en la tabla. Antes de hacerlas es
                    conveniente desactivar la opcion de automatico para evitar
                    conflictos. una vez hechas las modificaciones volver a
                    activar el automatico para rellenar el resto de la tabla.
                </li>
            </ol>
        </div>
    );
};
