import React from "react";
import "./INstrucciones.css";

export const Instrucciones = () => {
    return (
        <div className="pa">
            <h2>Registro de cambios</h2>
            <hr />
            <p>
                <b>v1.1.17</b>
            </p>
            <ol>
                <li>
                    Configuración inicial. La primera vez que se abra la app, no
                    tendrá nombres ni parámetros de trabajadores, deberán ser
                    establecidos manualmente.
                </li>
                <li>
                    Persistencia de datos a nivel local. Una vez establecida una
                    configuración, los datos van a persistir, así como cualquier
                    cambio posterior.
                </li>
                <li>
                    Añadida la opción de establecer y/o modificar el nombre del
                    trabajador al lado de los parámetros.
                </li>
                <li>
                    El botón "VOLVER A EMPEZAR" solamente elimina los días
                    libres que habían sido puestos manualmente
                </li>
                <li>
                    Añadido el botón “FIJAR LIBRE”, su función es: Una vez
                    encontrada una combinación de días libres que haya sido
                    generada automáticamente, dejar de generar nuevas
                    combinaciones y solo hacer modificaciones mediante los
                    parámetros en la disposición de los turnos.
                </li>
                <li>
                    Corregido: Si un trabajador tiene “0” en algún parámetro, la
                    aplicación lanzará un error antes de ponerlo.
                </li>
            </ol>
            <hr />
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
