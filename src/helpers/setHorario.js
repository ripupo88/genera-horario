import { trabajadores } from "../info/trabajadores";

const setHorario = (trabajadores) => {
    let semana = setSemana();
    console.log(semana);
};

const setSemana = () => {
    let dia = [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo",
    ];
    let semana = new Array(7);
    let hora = "";
    let puesto = "";
    for (let i = 0; i < semana.length; i++) {
        semana[i] = new Array(7);
    }
    let puntos = 0;
    let name = "";
    for (let i = 0; i < semana.length; i++) {
        for (let x = 0; x < semana[i].length; x++) {
            puntos = 0;
            switch (x) {
                case 0:
                    for (const trab of trabajadores) {
                        if (trab.last === 4) continue;
                        if (testTrab(trab, i)) continue;
                        if (trab.manana + trab.tienda > puntos) {
                            puntos = trab.manana + trab.tienda;
                            name = trab.name;
                        }
                    }
                    puesto = "tienda";
                    hora = "mañana";
                    break;
                case 1:
                    for (const trab of trabajadores) {
                        if (trab.last === 4) continue;
                        if (testTrab(trab, i)) continue;
                        if (trab.manana + trab.pista > puntos) {
                            puntos = trab.manana + trab.pista;
                            name = trab.name;
                        }
                    }
                    puesto = "pista";
                    hora = "mañana";
                    break;
                case 2:
                    for (const trab of trabajadores) {
                        if (testTrab(trab, x)) continue;
                        if (trab.tarde + trab.tienda > puntos) {
                            puntos = trab.tarde + trab.tienda;
                            name = trab.name;
                        }
                    }
                    puesto = "tienda";
                    hora = "tarde";
                    break;
                case 3:
                    for (const trab of trabajadores) {
                        if (testTrab(trab, x)) continue;
                        if (trab.tarde + trab.pista > puntos) {
                            puntos = trab.tarde + trab.pista;
                            name = trab.name;
                        }
                    }
                    puesto = "pista";
                    hora = "tarde";
                    break;
                case 4:
                    for (const trab of trabajadores) {
                        if (testTrab(trab, x)) continue;
                        if (trab.noche > puntos) {
                            puntos = trab.noche;
                            name = trab.name;
                        }
                    }
                    puesto = "tienda";
                    hora = "noche";
                    break;

                default:
                    for (const trab of trabajadores) {
                        if (trab.yajornada) continue;
                        if (trab.libre[0] === i || trab.libre[1] === i) {
                            console.log(trab.name);
                            name = trab.name;
                            trab.yajornada = true;
                        }
                    }
                    puesto = "";
                    hora = "libre";
                    break;
            }
            for (const trab of trabajadores) {
                if (trab.name === name) {
                    trab.yajornada = true;
                }
            }
            semana[i][x] = {
                name: [name],
                dia: dia[i],
                hora,
                puesto,
            };
            name = "nada";
        }
        for (const trab of trabajadores) {
            trab.yajornada = false;
        }
    }
    return semana;
};

const testTrab = (trab, x) => {
    if (trab.libre[0] === x) return true;
    if (trab.libre[1] === x) return true;
    if (trab.yajornada) return true;
    return false;
};

export default setHorario;
