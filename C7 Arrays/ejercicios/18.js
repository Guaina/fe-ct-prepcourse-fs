function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let total = resultadosTest.reduce((suma, num) => suma + num, 0);
  return total / resultadosTest.length;
}

module.exports = promedioResultadosTest;
