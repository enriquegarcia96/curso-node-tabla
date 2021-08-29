const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar ",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    description: "Muestra la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    describe: "Este es el número hasta donde quieres la tabla",
    default: 10,
  })
  //.- chequea que la bandera sea un numero entero .-//
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
