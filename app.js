const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs.js");
require("colors");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow))
  .catch((error) => console.log(error));
