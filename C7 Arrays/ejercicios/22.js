function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let arrayTablaDelSeis = [];
  let i = 0;
  do {
    arrayTablaDelSeis.push(6 * i)
    i++
  } while (i <= 10);
  return arrayTablaDelSeis;
}

module.exports = tablaDelSeis;
