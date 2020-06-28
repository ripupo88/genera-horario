import { trabajadores } from "../info/trabajadores";

const setHorario = (trabajadores) => {
  let semana = setSemana();
  //   console.log(semana);
  semana.map((item) => {
    item.map((f) => {
      //   if (f.puesto === "tienda")
      console.log(f.hora, f.dia, f.puesto, f.name);
      return "";
    });
    return "";
  });
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
              break;
            }
          }
          puesto = "";
          hora = "libre";
          break;

        case 2:
          for (const trab of trabajadores) {
            if (trab.yajornada) continue;
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
            }
          }
          puesto = "tienda";
          hora = "noche";
          break;

        case 3:
          for (const trab of trabajadores) {
            if (trab.yajornada) continue;
            if (trab.fuenoche) continue;
            if (trab.tienda < 1) continue;
            if (trab.manana < 1) continue;
            if (!trab.fuetarde) doblapuntos = trab.manana + trab.tienda;
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
            }
          }
          if (puntos === 0) console.log("renganche a la vista");
          doblapuntos = 0;
          puesto = "tienda";
          hora = "mañana";
          break;

        case 4:
          for (const trab of trabajadores) {
            if (trab.yajornada) continue;
            if (trab.fuenoche) continue;
            if (trab.pista < 1) continue;
            if (trab.manana < 1) continue;
            if (!trab.fuetarde) doblapuntos = trab.manana + trab.pista;
            if (doblapuntos > puntos) {
              puntos = doblapuntos;
              name = trab.name;
              if (i === 4) {
                console.log(trab);
                console.log(trab.name, puntos);
              }
            }
          }
          for (const trab of trabajadores) {
            if (trab.name === name) {
              trab.yajornada = true;
              trab.fuenoche = false;
              trab.fuetarde = false;
            }
          }
          puesto = "pista";
          hora = "mañana";
          if (puntos === 0) console.log("renganche a la vista");
          doblapuntos = 0;
          break;

        case 5:
          for (const trab of trabajadores) {
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
            }
          }
          puesto = "tienda";
          hora = "tarde";
          break;

        case 6:
          for (const trab of trabajadores) {
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

export default setHorario;
