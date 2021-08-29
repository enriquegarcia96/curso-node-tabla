const colors = require("colors/safe");
const fs = require("fs");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida,
      consola = "";

    for (let index = 1; index <= hasta; index++) {
      salida += `${base} "X" ${index} "=" ${base * index}\n`;
      consola += `${base} ${colors.red("X")} ${index} ${colors.red("=")} ${
        base * index
      }\n`;
    }

    if (listar) {
      console.log(
        colors.magenta("================================================")
      );
      console.log(colors.bgWhite(colors.black("Tabla del:", base)));
      console.log(
        colors.magenta("================================================")
      );
      // console.log(colors.green(salida));
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt creada`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
