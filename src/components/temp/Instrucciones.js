import React from "react";
import "./INstrucciones.css";

export const Instrucciones = () => {
    return (
        <div className="pa">
            <h2>Registro de cambios</h2>
            <p>
                <b>v1.1.16</b>
            </p>
            <ol>
                <li>Removido Rafa de la lista de trabajadores</li>
                <li>
                    Añadido "Judith" a la lista de trabajadores con los
                    parametros por defecto de tienda = 5, mañana = 5
                </li>
                <li>
                    Los parametros por defecto de "Nuñes" pasan a ser: tienda:
                    0, pista: 4, mañana: 1, tarde: 4, noche: 2
                </li>
                <li>
                    Ahora, cuando se realice cualquier cambio será visible
                    inmediatamente. Antes era necesario dar al botón de
                    "GENERAR"
                </li>
                <li>
                    El botón "VOLVER A EMPEZAR" alimina todos los cambios y
                    vuelve a los valores por defecto.
                </li>
                <li>
                    Añadido el registro de cambios para tener un informe
                    detallado de lo que cambie en cada version a partir de la
                    v1.1.16
                </li>
            </ol>
        </div>
    );
};
