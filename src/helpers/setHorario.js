import { trabajadores } from "../info/trabajadores";

const setHorario = (trabajadores) => {
    const newsemana = cleanSemana();
    let semana = setSemana(newsemana);
    return semana;
};

const setHorarioOrden = (trabajadores) => {
    let orden = setHorario(trabajadores);
    let newOrden = [
        [
            orden[0][3],
            orden[1][3],
            orden[2][3],
            orden[3][3],
            orden[4][3],
            orden[5][3],
            orden[6][3],
        ],
        [
            orden[0][4],
            orden[1][4],
            orden[2][4],
            orden[3][4],
            orden[4][4],
            orden[5][4],
            orden[6][4],
        ],
        [
            orden[0][5],
            orden[1][5],
            orden[2][5],
            orden[3][5],
            orden[4][5],
            orden[5][5],
            orden[6][5],
        ],
        [
            orden[0][6],
            orden[1][6],
            orden[2][6],
            orden[3][6],
            orden[4][6],
            orden[5][6],
            orden[6][6],
        ],
        [
            orden[0][2],
            orden[1][2],
            orden[2][2],
            orden[3][2],
            orden[4][2],
            orden[5][2],
            orden[6][2],
        ],
        [
            orden[0][0],
            orden[1][0],
            orden[2][0],
            orden[3][0],
            orden[4][0],
            orden[5][0],
            orden[6][0],
        ],
        [
            orden[0][1],
            orden[1][1],
            orden[2][1],
            orden[3][1],
            orden[4][1],
            orden[5][1],
            orden[6][1],
        ],
    ];
    return newOrden;
};

export const cleanSemana = () => {
    let semana = new Array(7);
    for (let i = 0; i < semana.length; i++) {
        semana[i] = new Array(7);
    }
    return semana;
};

const setSemana = (semana) => {
    let dia = [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo",
    ];
    let hora = "";
    let puesto = "";
    let puntos = -1;
    let doblapuntos = 0;
    let name = "";
    for (let i = 0; i < semana.length; i++) {
        for (let x = 0; x < semana[i].length; x++) {
            puntos = -1;
            switch (x) {
                case 0:
                    for (const trab of trabajadores) {
                        if (trab.yajornada) continue;
                        if (trab.libre[0] === i || trab.libre[1] === i) {
                            name = trab.name;
                            break;
                        }
                    }
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = false;
                            trab.semana.horario[i].valor = "L";
                            break;
                        }
                    }
                    puesto = "";
                    hora = "libre";
                    break;

                case 1:
                    for (const trab of trabajadores) {
                        if (trab.yajornada) continue;
                        if (trab.libre[0] === i || trab.libre[1] === i) {
                            name = trab.name;
                            break;
                        }
                    }
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = false;
                            trab.semana.horario[i].valor = "L";
                            break;
                        }
                    }
                    puesto = "";
                    hora = "libre";
                    break;

                case 2:
                    for (const trab of trabajadores) {
                        if (trab.semana.horario[i].valor === "N") {
                            trab.semana.horario[i].valor = "N";
                            name = trab.name;
                            break;
                        }
                        if (trab.semana.horario[i].valor != null) continue;
                        if (trab.yajornada) continue;
                        if (trab.noche < 1) continue;
                        if (trab.noche > puntos) {
                            puntos = trab.noche;
                            name = trab.name;
                        }
                    }
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = true;
                            trab.fuetarde = false;
                            trab.semana.horario[i].valor = "N";
                        }
                    }
                    puesto = "tienda";
                    hora = "noche";
                    break;

                case 3:
                    for (const trab of trabajadores) {
                        if (trab.semana.horario[i].valor === "Mt") {
                            trab.semana.horario[i].valor = "Mt";
                            name = trab.name;
                            break;
                        }
                        if (trab.semana.horario[i].valor != null) continue;
                        if (trab.yajornada) continue;
                        if (trab.fuenoche) continue;
                        if (trab.tienda < 1) continue;
                        if (trab.manana < 1) continue;
                        if (!trab.fuetarde)
                            doblapuntos = trab.manana + trab.tienda;
                        if (doblapuntos > puntos) {
                            puntos = doblapuntos;
                            name = trab.name;
                        }
                    }
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = false;
                            trab.semana.horario[i].valor = "Mt";
                        }
                    }
                    doblapuntos = 0;
                    puesto = "tienda";
                    hora = "mañana";
                    break;

                case 4:
                    for (const trab of trabajadores) {
                        if (trab.semana.horario[i].valor === "M") {
                            trab.semana.horario[i].valor = "M";
                            name = trab.name;
                            break;
                        }
                        if (trab.semana.horario[i].valor != null) continue;
                        if (trab.yajornada) continue;
                        if (trab.fuenoche) continue;
                        if (trab.pista < 1) continue;
                        if (trab.manana < 1) continue;
                        if (!trab.fuetarde)
                            doblapuntos = trab.manana + trab.pista;
                        if (doblapuntos > puntos) {
                            puntos = doblapuntos;
                            name = trab.name;
                        }
                    }
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = false;
                            trab.semana.horario[i].valor = "M";
                        }
                    }
                    puesto = "pista";
                    hora = "mañana";
                    doblapuntos = 0;
                    break;

                case 5:
                    for (const trab of trabajadores) {
                        if (trab.semana.horario[i].valor === "Tt") {
                            trab.semana.horario[i].valor = "Tt";
                            name = trab.name;
                            break;
                        }
                        if (trab.semana.horario[i].valor != null) continue;
                        if (trab.yajornada) continue;
                        if (trab.fuenoche) continue;
                        if (trab.tienda < 1) continue;
                        if (trab.tarde + trab.tienda > puntos) {
                            puntos = trab.tarde + trab.tienda;
                            name = trab.name;
                        }
                    }
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = true;
                            trab.semana.horario[i].valor = "Tt";
                        }
                    }
                    puesto = "tienda";
                    hora = "tarde";
                    break;

                case 6:
                    for (const trab of trabajadores) {
                        if (trab.semana.horario[i].valor === "T") {
                            trab.semana.horario[i].valor = "T";
                            name = trab.name;
                            break;
                        }
                        if (trab.semana.horario[i].valor != null) continue;
                        if (trab.yajornada) continue;
                        if (trab.fuenoche) continue;
                        if (trab.pista < 1) continue;
                        if (trab.tarde + trab.pista > puntos) {
                            puntos = trab.tarde + trab.pista;
                            name = trab.name;
                        }
                    }
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = true;
                            trab.semana.horario[i].valor = "T";
                        }
                    }
                    puesto = "pista";
                    hora = "tarde";
                    break;
                default:
                    break;
            }
            semana[i][x] = {
                name: [name],
                dia: dia[i],
                hora,
                puesto,
            };
            if (name === "nada") console.log("Error Revisar condiciones");
            name = "nada";
        }
        for (const trab of trabajadores) {
            trab.yajornada = false;
        }
    }
    return semana;
};

export default setHorarioOrden;