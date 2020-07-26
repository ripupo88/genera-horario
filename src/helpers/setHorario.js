const setHorarioOrden = (trabajadores) => {
    console.log(trabajadores);
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

const setHorario = (trabajadores) => {
    const newsemana = cleanSemana();
    let semana = setSemana(newsemana, trabajadores);
    return semana;
};

export const cleanSemana = () => {
    let semana = new Array(7);
    for (let i = 0; i < semana.length; i++) {
        semana[i] = new Array(7);
    }
    return semana;
};

const setSemana = (semana, trabajadores) => {
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
    let OtroName = "";
    let listaHorario = [];
    let ListaLibrar = [];
    for (const trab of trabajadores) {
        trab.yajornada = false;
        trab.fuenoche = false;
        trab.fuetarde = false;
        trab.fuelibre = false;
        for (const cada of trab.semana.horario) {
            if (cada.forced === false) cada.valor = null;
        }
    }
    for (let i = 0; i < semana.length; i++) {
        for (let x = 0; x < semana[i].length; x++) {
            puntos = -1;
            let esRenganche = false;
            let diasLibrados = [];
            switch (x) {
                case 0:
                    name = "";
                    for (const trab of trabajadores) {
                        diasLibrados = trab.semana.horario.filter(
                            (a) => a.valor === "L" || a.valor === "L1"
                        );

                        if (trab.yajornada) continue;
                        if (
                            trab.semana.horario[i].valor === "L" &&
                            trab.semana.horario[i].forced
                        ) {
                            ListaLibrar = [trab.name];
                            break;
                        }
                        if (trab.semana.horario[i].forced) continue;
                        if (diasLibrados.length >= 2) continue;

                        if (i === 5 && diasLibrados.length === 0) {
                            ListaLibrar = [trab.name];
                            break;
                        }
                        if (trab.fuesegundanoche && trab.noche < 5) {
                            ListaLibrar = [trab.name];
                            break;
                        }
                        if (trab.fuelibre) {
                            ListaLibrar = [
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                            ];
                        }

                        ListaLibrar.push(trab.name);
                    }

                    if (ListaLibrar.length > 1) {
                        name =
                            ListaLibrar[
                                Math.floor(Math.random() * ListaLibrar.length)
                            ];
                    } else {
                        name = ListaLibrar[0];
                    }

                    ListaLibrar = [];
                    diasLibrados = [];
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuesegundanoche = false;
                            trab.fuetarde = false;
                            trab.fuelibre = true;
                            trab.semana.horario[i].valor = "L";
                            break;
                        }
                    }
                    puesto = "";
                    hora = "libre";
                    break;

                case 1:
                    name = "";
                    for (const trab of trabajadores) {
                        diasLibrados = trab.semana.horario.filter(
                            (a) => a.valor === "L" || a.valor === "L1"
                        );

                        if (trab.yajornada) {
                            continue;
                        }
                        if (
                            trab.semana.horario[i].valor === "L1" &&
                            trab.semana.horario[i].forced
                        ) {
                            ListaLibrar = [trab.name];
                            break;
                        }
                        if (trab.semana.horario[i].forced) continue;
                        if (diasLibrados.length >= 2) {
                            continue;
                        }
                        if (i === 5 && diasLibrados.length === 0) {
                            ListaLibrar = [trab.name];
                            break;
                        }
                        if (trab.fuelibre) {
                            ListaLibrar = [
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                                trab.name,
                            ];
                        }

                        ListaLibrar.push(trab.name);
                    }
                    if (ListaLibrar.length > 1) {
                        name =
                            ListaLibrar[
                                Math.floor(Math.random() * ListaLibrar.length)
                            ];
                    } else {
                        name = ListaLibrar[0];
                    }
                    ListaLibrar = [];
                    diasLibrados = [];
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuesegundanoche = false;
                            trab.fuetarde = false;
                            trab.fuelibre = true;
                            trab.semana.horario[i].valor = "L1";
                            break;
                        }
                    }
                    puesto = "";
                    hora = "libre";
                    break;

                case 2:
                    name = "";
                    for (const trab of trabajadores) {
                        if (
                            trab.semana.horario[i].valor === "N" &&
                            trab.semana.horario[i].forced
                        ) {
                            trab.semana.horario[i].valor = "N";
                            name = trab.name;
                            break;
                        }
                        if (trab.semana.horario[i].forced) continue;

                        if (trab.yajornada) continue;
                        if (trab.noche < 1) continue;
                        if (trab.noche > puntos) {
                            puntos = trab.noche;
                            name = trab.name;
                        }
                    }
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            if (trab.fuenoche) {
                                trab.fuesegundanoche = true;
                            } else {
                                trab.fuesegundanoche = false;
                            }
                            trab.yajornada = true;
                            trab.fuenoche = true;
                            trab.fuetarde = false;
                            trab.fuelibre = false;
                            trab.fuelibre = false;
                            trab.fuelibre = false;
                            trab.semana.horario[i].valor = "N";
                        }
                    }
                    puesto = "tienda";
                    hora = "noche";
                    break;

                case 3:
                    name = "";
                    for (const trab of trabajadores) {
                        if (trab.fuenoche) continue;
                        // if (
                        //     trab.semana.horario[i].valor === "M" &&
                        //     trab.semana.horario[i].forced
                        // ) {
                        //     trab.semana.horario[i].valor = "M";
                        //     name = trab.name;
                        //     break;
                        // }

                        if (trab.yajornada) continue;
                        //if (trab.pista < 1) continue;
                        if (trab.manana < 1) continue;
                        if (!trab.fuetarde) {
                            doblapuntos = trab.manana;
                        } else {
                            doblapuntos = 0;
                        }

                        listaHorario.unshift({
                            ...trab,
                            manana: doblapuntos,
                        });
                    }

                    listaHorario.sort(function (a, b) {
                        if (a.manana > b.manana) {
                            return -1;
                        }
                        if (a.manana < b.manana) {
                            return 1;
                        }

                        return -1;
                    });

                    while (
                        listaHorario[0].pista + listaHorario[1].pista ===
                        0
                    ) {
                        listaHorario.splice(1, 1);
                    }
                    if (
                        (listaHorario[0].pista + listaHorario[1].tienda) *
                            Math.ceil(listaHorario[0].pista / 10) >
                        (listaHorario[1].pista + listaHorario[0].tienda) *
                            Math.ceil(listaHorario[1].pista / 10)
                    ) {
                        name = listaHorario[0].name;
                        OtroName = listaHorario[1].name;
                    } else {
                        name = listaHorario[1].name;
                        OtroName = listaHorario[0].name;
                    }

                    listaHorario = [];
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            if (trab.fuetarde) {
                                esRenganche = true;
                            } else {
                                esRenganche = false;
                            }
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = false;
                            trab.fuelibre = false;
                            trab.fuelibre = false;
                            trab.semana.horario[i].valor = "M";
                        }
                    }
                    puesto = "pista";
                    hora = "mañana";
                    doblapuntos = 0;

                    break;

                case 4:
                    name = OtroName;
                    OtroName = "";

                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            if (trab.fuetarde) {
                                esRenganche = true;
                            } else {
                                esRenganche = false;
                            }
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = false;
                            trab.fuelibre = false;
                            trab.semana.horario[i].valor = "Mt";
                        }
                    }
                    doblapuntos = 0;
                    puesto = "tienda";
                    hora = "mañana";
                    break;

                case 5:
                    name = "";
                    for (const trab of trabajadores) {
                        if (trab.fuenoche) continue;
                        // if (
                        //     trab.semana.horario[i].valor === "T" &&
                        //     trab.semana.horario[i].forced
                        // ) {
                        //     trab.semana.horario[i].valor = "T";
                        //     name = trab.name;
                        //     break;
                        // }

                        if (trab.yajornada) continue;
                        //if (trab.pista < 1) continue;
                        if (trab.tarde + trab.pista > puntos) {
                            puntos = trab.tarde;
                        }
                        listaHorario.unshift(trab);
                    }

                    listaHorario.sort(function (a, b) {
                        if (a.tarde > b.tarde) {
                            return -1;
                        }
                        if (a.tarde < b.tarde) {
                            return 1;
                        }

                        return -1;
                    });

                    try {
                        if (
                            listaHorario[0].pista + listaHorario[1].tienda >
                            listaHorario[1].pista + listaHorario[0].tienda
                        ) {
                            name = listaHorario[0].name;
                            OtroName = listaHorario[1].name;
                        } else {
                            name = listaHorario[1].name;
                            OtroName = listaHorario[0].name;
                        }
                    } catch (error) {
                        name = "error";
                        OtroName = "error";
                    }

                    listaHorario = [];

                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = true;
                            trab.fuelibre = false;
                            trab.fuelibre = false;
                            trab.semana.horario[i].valor = "T";
                        }
                    }
                    puesto = "pista";
                    hora = "tarde";
                    break;
                default:
                    break;

                case 6:
                    name = OtroName;
                    OtroName = "";
                    for (const trab of trabajadores) {
                        if (trab.name === name) {
                            trab.yajornada = true;
                            trab.fuenoche = false;
                            trab.fuetarde = true;
                            trab.fuelibre = false;
                            trab.semana.horario[i].valor = "Tt";
                        }
                    }
                    puesto = "tienda";
                    hora = "tarde";
                    break;
            }

            semana[i][x] = {
                name: [name],
                esRenganche,
                dia: dia[i],
                hora,
                puesto,
            };

            name = "";
        }
        for (const trab of trabajadores) {
            trab.yajornada = false;
        }
    }

    return semana;
};

export default setHorarioOrden;
